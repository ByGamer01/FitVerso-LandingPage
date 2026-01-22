"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="FitVerso"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground">
              Fit<span className="text-primary">Verso</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Características
            </a>
            <a
              href="#quests"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Misiones
            </a>
            <a
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Comunidad
            </a>
            <a
              href="#download"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Descargar
            </a>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/delete-account"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Eliminar Cuenta
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.fitverso.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 animate-pulse-glow">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Google Play
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Características
              </a>
              <a
                href="#quests"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Misiones
              </a>
              <a
                href="#testimonials"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Comunidad
              </a>
              <a
                href="#download"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Descargar
              </a>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacidad
              </Link>
              <Link
              href="/delete-account"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Eliminar Cuenta
            </Link>
              <div className="pt-4 border-t border-border">
                <a
                  href="https://play.google.com/store/apps/details?id=com.fitverso.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                    Google Play
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
