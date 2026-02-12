"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function ThemeToggler() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { setTheme, theme } = useTheme();

  if (!mounted) return null;

  return (
    <>
      <Button variant="ghost" size="icon-sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")} name="theme">
        {theme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </>
  );
}
