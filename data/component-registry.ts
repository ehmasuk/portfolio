import { Layout } from "./ui/layout";
import { Typography } from "./ui/typography";

export const componentRegistry = {
  layout: Layout,
  typography: Typography,
} as const;

export type ComponentRegistryKey = keyof typeof componentRegistry;
