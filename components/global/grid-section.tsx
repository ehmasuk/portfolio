import React from "react";
import { Gridder } from "./gridder";

function GridSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 gridder-section">
      {children}
      <Gridder />
    </div>
  );
}

export default GridSection;
