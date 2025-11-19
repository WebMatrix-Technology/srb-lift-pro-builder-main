import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { loadSettings, saveSettings, defaultSettings, SiteSettings } from "@/lib/settings";

const Admin = () => {
  const [authed, setAuthed] = useState<boolean>(() => localStorage.getItem("admin_authed") === "true");
  const [password, setPassword] = useState("");
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";

  const [settings, setSettings] = useState<SiteSettings>(() => loadSettings());
  const [messages, setMessages] = useState<any[]>([]);
  const [loadingMsg, setLoadingMsg] = useState(false);

  const isSupabaseConfigured =
    Boolean(import.meta.env.VITE_SUPABASE_URL) &&
    Boolean(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

  const login = () => {
    if (password === adminPassword) {
      localStorage.setItem("admin_authed", "true");
      setAuthed(true);
      toast({ title: "Welcome", description: "Admin access granted." });
    } else {
      toast({ title: "Invalid password", description: "Please try again." });
    }
  };

  const logout = () => {
    localStorage.removeItem("admin_authed");
    setAuthed(false);
  };

  const resetDefaults = () => {
    setSettings(defaultSettings);
  };

  const save = () => {
    saveSettings(settings);
    toast({ title: "Saved", description: "Site settings updated locally." });
  };

  const fetchMessages = async () => {
    if (!isSupabaseConfigured) {
      setMessages([]);
      return;
    }
    setLoadingMsg(true);
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });
    setLoadingMsg(false);
    if (error) {
      console.error(error);
      toast({ title: "Unable to load messages" });
      return;
    }
    setMessages(data || []);
  };

  useEffect(() => {
    if (authed) {
      fetchMessages();
    }
  }, [authed]);

  if (!authed) {
    return (
      <div className="container mx-auto max-w-md px-4 py-16">
        <Card>
          <CardContent className="space-y-4 p-6">
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && login()}
            />
            <Button className="w-full" onClick={login}>
              Sign In
            </Button>
            <p className="text-xs text-muted-foreground">
              Tip: configure VITE_ADMIN_PASSWORD in your environment.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-10 px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="space-x-2">
          <Button variant="outline" onClick={logout}>Logout</Button>
        </div>
      </div>

      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Site Settings</h2>
            <div className="space-x-2">
              <Button variant="outline" onClick={resetDefaults}>Reset</Button>
              <Button onClick={save}>Save</Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Company Name</label>
              <Input value={settings.companyName} onChange={(e) => setSettings({ ...settings, companyName: e.target.value })} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Tagline</label>
              <Input value={settings.tagline} onChange={(e) => setSettings({ ...settings, tagline: e.target.value })} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <Input value={settings.email} onChange={(e) => setSettings({ ...settings, email: e.target.value })} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">WhatsApp Number (E.164 without +)</label>
              <Input value={settings.whatsapp} onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">Address</label>
              <Textarea rows={3} value={settings.address} onChange={(e) => setSettings({ ...settings, address: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">Phone Numbers (one per line)</label>
              <Textarea
                rows={4}
                value={settings.phones.join("\n")}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    phones: e.target.value
                      .split("\n")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  })
                }
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Notes: Settings are saved locally in the browser and reflected immediately in header, footer, contact and WhatsApp button.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Contact Messages</h2>
            <div className="space-x-2">
              <Button variant="outline" onClick={fetchMessages} disabled={loadingMsg}>
                {loadingMsg ? "Refreshing..." : "Refresh"}
              </Button>
            </div>
          </div>
          {!isSupabaseConfigured ? (
            <p className="text-sm text-muted-foreground">
              Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY to enable message storage.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>When</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((m) => (
                    <TableRow key={m.id}>
                      <TableCell className="whitespace-nowrap">{m.created_at ? new Date(m.created_at).toLocaleString() : "-"}</TableCell>
                      <TableCell>{m.name}</TableCell>
                      <TableCell>{m.email}</TableCell>
                      <TableCell>{m.phone}</TableCell>
                      <TableCell className="max-w-xl">{m.message}</TableCell>
                    </TableRow>
                  ))}
                  {!messages.length && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-sm text-muted-foreground">
                        No messages yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;

