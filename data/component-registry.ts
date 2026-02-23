import { Layout } from "./ui/layout";
import { RealTimePresence } from "./ui/real-time-presence";
import { Typewriter } from "./ui/typewriter";
import { Typography } from "./ui/typography";
import { WeeklyBars } from "./ui/weekly-bars";

export const componentRegistry = {
  Layout,
  Typography,
  Typewriter,
  WeeklyBars,
  RealTimePresence,
} as const;

export type ComponentRegistryKey = keyof typeof componentRegistry;
