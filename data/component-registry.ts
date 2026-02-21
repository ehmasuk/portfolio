import { Layout } from "./ui/layout";
import { Typewriter } from "./ui/typewriter";
import { Typography } from "./ui/typography";

export const componentRegistry = {
  Layout,
  Typography,
  Typewriter,
} as const;

export type ComponentRegistryKey = keyof typeof componentRegistry;
