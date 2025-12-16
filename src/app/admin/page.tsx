"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { loadSettings, saveSettings, defaultSettings, SiteSettings } from "@/lib/settings";
import { defaultAdminSidebarItems } from "@/lib/data";
import { 
  LayoutDashboard, 
  Settings, 
  MessageSquare, 
  LogOut, 
  Menu, 
  X, 
  Building2,
  Mail,
  Phone,
  MapPin,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

type AdminSection = "dashboard" | "settings" | "messages";

export default function Admin() {
  const [authed, setAuthed] = useState<boolean>(false);
  const [password, setPassword] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard");
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [messages, setMessages] = useState<any[]>([]);
  const [loadingMsg, setLoadingMsg] = useState(false);
  const [saving, setSaving] = useState(false);

  // Load settings and auth state on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      setAuthed(localStorage.getItem("admin_authed") === "true");
      setSettings(loadSettings());
      // Auto-close sidebar on mobile
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    }
  }, []);

  const isSupabaseConfigured =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

  const login = () => {
    if (password === adminPassword) {
      if (typeof window !== "undefined") {
        localStorage.setItem("admin_authed", "true");
      }
      setAuthed(true);
      toast({ title: "Welcome", description: "Admin access granted." });
    } else {
      toast({ title: "Invalid password", description: "Please try again.", variant: "destructive" });
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_authed");
    }
    setAuthed(false);
    setPassword("");
    toast({ title: "Logged out", description: "You have been logged out successfully." });
  };

  const resetDefaults = () => {
    if (confirm("Are you sure you want to reset all settings to defaults? This cannot be undone.")) {
      setSettings(defaultSettings);
      toast({ title: "Reset", description: "Settings reset to defaults." });
    }
  };

  const save = async () => {
    setSaving(true);
    // Simulate save delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    saveSettings(settings);
    setSaving(false);
    toast({ title: "Saved", description: "Site settings updated successfully." });
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
      toast({ title: "Error", description: "Unable to load messages.", variant: "destructive" });
      return;
    }
    setMessages(data || []);
    toast({ title: "Refreshed", description: "Messages updated." });
  };

  useEffect(() => {
    if (authed && activeSection === "messages") {
      fetchMessages();
    }
  }, [authed, activeSection]);

  const sidebarItems = defaultAdminSidebarItems.map((item) => ({
    ...item,
    id: item.id as AdminSection,
  }));

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary-hover/5 p-4">
        <Card className="w-full max-w-md border-2 shadow-xl">
          <CardContent className="space-y-6 p-8">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold">Admin Login</h1>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Enter your password to access the admin dashboard
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && login()}
                  className="h-12 border-2"
                />
              </div>
              <Button className="w-full h-12 bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg transition-all" onClick={login}>
                Sign In
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Configure NEXT_PUBLIC_ADMIN_PASSWORD in your environment
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background/95 backdrop-blur-sm shadow-lg transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex h-20 items-center justify-between border-b px-6 bg-gradient-to-r from-primary/5 to-primary-hover/5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-md">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg">Admin Panel</span>
                <p className="text-xs text-muted-foreground">SRB Elevator</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 space-y-2 p-4">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    if (window.innerWidth < 1024) {
                      setSidebarOpen(false);
                    }
                  }}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-primary to-primary-hover text-white shadow-lg scale-[1.02]"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className={cn("h-5 w-5 transition-transform", isActive && "scale-110")} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="border-t p-4 bg-muted/30">
            <Button
              variant="outline"
              className="w-full border-2 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors"
              onClick={logout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:ml-64">
        {/* Mobile Menu Button */}
        <div className="sticky top-0 z-20 flex h-16 items-center border-b bg-background/95 backdrop-blur-md shadow-sm px-4 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Content Area */}
        <main className="flex-1 p-4 lg:p-6 xl:p-8">
          {activeSection === "dashboard" && (
            <div className="space-y-6 animate-in fade-in-50 duration-500">
              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="group border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Total Messages</p>
                        <p className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                          {messages.length}
                        </p>
                        <p className="text-xs text-muted-foreground">Contact form submissions</p>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary-hover/20 group-hover:from-primary/30 group-hover:to-primary-hover/30 transition-all">
                        <MessageSquare className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Company Name</p>
                        <p className="text-lg font-bold truncate max-w-[150px]">{settings.companyName}</p>
                        <p className="text-xs text-muted-foreground">Current setting</p>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary-hover/20 group-hover:from-primary/30 group-hover:to-primary-hover/30 transition-all">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Contact Email</p>
                        <p className="text-sm font-medium truncate max-w-[150px]">{settings.email}</p>
                        <p className="text-xs text-muted-foreground">Primary contact</p>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary-hover/20 group-hover:from-primary/30 group-hover:to-primary-hover/30 transition-all">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card className="border-2 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Button
                      variant="outline"
                      className="group h-auto flex-col items-start p-6 border-2 hover:border-primary hover:shadow-md transition-all"
                      onClick={() => setActiveSection("settings")}
                    >
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Settings className="h-6 w-6 text-primary" />
                      </div>
                      <span className="mb-1 font-semibold text-lg">Manage Site Settings</span>
                      <span className="text-sm text-muted-foreground">Update company information and contact details</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="group h-auto flex-col items-start p-6 border-2 hover:border-primary hover:shadow-md transition-all"
                      onClick={() => setActiveSection("messages")}
                    >
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <span className="mb-1 font-semibold text-lg">View Messages</span>
                      <span className="text-sm text-muted-foreground">
                        {messages.length} message{messages.length !== 1 ? "s" : ""} received from contact form
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === "settings" && (
            <Card className="border-2 shadow-lg animate-in fade-in-50 duration-500">
              <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-primary-hover/5">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Settings className="h-6 w-6 text-primary" />
                    Site Settings
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={resetDefaults} className="border-2">
                      Reset
                    </Button>
                    <Button 
                      onClick={save} 
                      disabled={saving}
                      className="bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg transition-all"
                    >
                      {saving ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <Building2 className="h-4 w-4 text-primary" />
                      Company Name
                    </label>
                    <Input
                      value={settings.companyName}
                      onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                      placeholder="Enter company name"
                      className="h-11 border-2 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <Settings className="h-4 w-4 text-primary" />
                      Tagline
                    </label>
                    <Input
                      value={settings.tagline}
                      onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                      placeholder="Enter tagline"
                      className="h-11 border-2 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <Mail className="h-4 w-4 text-primary" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={settings.email}
                      onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                      placeholder="Enter email address"
                      className="h-11 border-2 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <Phone className="h-4 w-4 text-primary" />
                      WhatsApp Number
                    </label>
                    <Input
                      value={settings.whatsapp}
                      onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                      placeholder="E.164 format without +"
                      className="h-11 border-2 focus:border-primary"
                    />
                    <p className="text-xs text-muted-foreground">Example: 917705888341</p>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold">
                      <MapPin className="h-4 w-4 text-primary" />
                      Address
                    </label>
                    <Textarea
                      rows={3}
                      value={settings.address}
                      onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                      placeholder="Enter full address"
                      className="border-2 focus:border-primary resize-none"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-semibold">Phone Numbers</label>
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
                      placeholder="Enter phone numbers (one per line)"
                      className="border-2 focus:border-primary resize-none"
                    />
                    <p className="text-xs text-muted-foreground">Enter one phone number per line</p>
                  </div>
                </div>
                <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold mb-1">Note</p>
                      <p className="text-sm text-muted-foreground">
                        Settings are saved locally in the browser and reflected immediately in header, footer, contact page, and WhatsApp button.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "messages" && (
            <Card className="border-2 shadow-lg animate-in fade-in-50 duration-500">
              <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-primary-hover/5">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Contact Messages
                    {messages.length > 0 && (
                      <span className="ml-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                        {messages.length}
                      </span>
                    )}
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    onClick={fetchMessages} 
                    disabled={loadingMsg}
                    className="border-2"
                  >
                    <RefreshCw className={cn("mr-2 h-4 w-4", loadingMsg && "animate-spin")} />
                    {loadingMsg ? "Refreshing..." : "Refresh"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {!isSupabaseConfigured ? (
                  <div className="p-6">
                    <div className="rounded-lg border-2 border-yellow-500/50 bg-yellow-500/10 p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                            Supabase not configured
                          </p>
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">
                            Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY to enable message storage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="w-[180px] font-semibold">Date & Time</TableHead>
                          <TableHead className="font-semibold">Name</TableHead>
                          <TableHead className="font-semibold">Email</TableHead>
                          <TableHead className="font-semibold">Phone</TableHead>
                          <TableHead className="min-w-[300px] font-semibold">Message</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {messages.map((m, index) => (
                          <TableRow 
                            key={m.id} 
                            className="hover:bg-muted/50 transition-colors"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <TableCell className="whitespace-nowrap text-sm font-medium">
                              {m.created_at ? new Date(m.created_at).toLocaleString() : "-"}
                            </TableCell>
                            <TableCell className="font-medium">{m.name}</TableCell>
                            <TableCell>
                              {m.email ? (
                                <a 
                                  href={`mailto:${m.email}`} 
                                  className="text-primary hover:underline flex items-center gap-1"
                                >
                                  <Mail className="h-3 w-3" />
                                  {m.email}
                                </a>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </TableCell>
                            <TableCell>
                              {m.phone ? (
                                <a 
                                  href={`tel:${m.phone}`} 
                                  className="text-primary hover:underline flex items-center gap-1"
                                >
                                  <Phone className="h-3 w-3" />
                                  {m.phone}
                                </a>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </TableCell>
                            <TableCell className="max-w-xl">{m.message}</TableCell>
                          </TableRow>
                        ))}
                        {!messages.length && (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-12">
                              <div className="flex flex-col items-center gap-3">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                                  <MessageSquare className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <div>
                                  <p className="font-semibold">No messages yet</p>
                                  <p className="text-sm text-muted-foreground">
                                    Messages from the contact form will appear here
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}