"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering theme-dependent content until after mount
  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:border-red-500 hover:bg-red-500/10"
        aria-label="Toggle theme"
      >
        <p className="text-lg">—</p>
        <span>Theme</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-red-500 hover:bg-red-500/10"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <i className="ph-sun hover:text-red-500"></i>
      ) : (
        <i className="ph-moon hover:text-red-500"></i>
      )}
      <span className="hidden md:block">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
