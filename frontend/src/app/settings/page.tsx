"use client";

import React from "react";
import { Settings, Bell, Shield, Wallet, Moon, Sun } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Settings</h1>
      
      <div className="grid gap-8 md:grid-cols-3">
        <aside className="space-y-2">
          <button className="flex w-full items-center gap-3 rounded-xl bg-accent/10 p-4 text-accent">
            <Settings className="h-5 w-5" />
            <span className="font-medium">General</span>
          </button>
          <button className="flex w-full items-center gap-3 rounded-xl p-4 text-slate-400 hover:bg-white/5 transition-colors">
            <Bell className="h-5 w-5" />
            <span className="font-medium">Notifications</span>
          </button>
          <button className="flex w-full items-center gap-3 rounded-xl p-4 text-slate-400 hover:bg-white/5 transition-colors">
            <Shield className="h-5 w-5" />
            <span className="font-medium">Security</span>
          </button>
        </aside>

        <div className="md:col-span-2 space-y-6">
          <section className="glass-card rounded-2xl border-slate-800 p-6">
            <h2 className="mb-6 text-xl font-bold flex items-center gap-2">
              <Moon className="h-5 w-5 text-accent" />
              Appearance
            </h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-slate-400">Toggle between dark and light themes.</p>
              </div>
              <button className="h-8 w-14 rounded-full bg-slate-800 p-1 relative">
                <div className="h-6 w-6 rounded-full bg-accent absolute right-1"></div>
              </button>
            </div>
          </section>

          <section className="glass-card rounded-2xl border-slate-800 p-6">
            <h2 className="mb-6 text-xl font-bold flex items-center gap-2">
              <Wallet className="h-5 w-5 text-accent" />
              Connected Wallet
            </h2>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="font-mono text-sm">GABC...XYZ123</div>
              <button className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors">
                Disconnect
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}