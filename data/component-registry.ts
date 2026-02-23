import { Layout } from "./ui/layout";
import { Typewriter } from "./ui/typewriter";
import { Typography } from "./ui/typography";
import { WeeklyBars } from "./ui/weekly-bars";

export const componentRegistry = {
  Layout,
  Typography,
  Typewriter,
  WeeklyBars,
} as const;

export type ComponentRegistryKey = keyof typeof componentRegistry;
