import { ReactNode } from "react";

export function ComponentInstallation({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function InstallationStep({ step, title, children }: { step: number; title?: string; children: ReactNode }) {
  return (
    <div>
      {step}
      {title}
      {children}
    </div>
  );
}

export default ComponentInstallation;
