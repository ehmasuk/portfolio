"use client";

import { cn as cnUtil } from "@/lib/utils";
import { ArrowDown01Icon, Copy01FreeIcons, Tick01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Button } from "../ui/button";

const cnCode = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;

type CodeBlockProps = {
  code: string;
  filename: string;
  language?: string;
  showLineNumbers?: boolean;
  expanded?: boolean;
  cn?: boolean;
};

export const CodeBlock = ({ language = "javascript", filename, code, showLineNumbers = true, expanded = false, cn = false }: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [isExpanded, setIsExpanded] = useState(expanded);

  const copyToClipboard = async () => {
    const textToCopy = cn ? cnCode : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = cn ? cnCode : code;

  const { theme } = useTheme();

  return (
    <div className="relative">
      <div className={cnUtil("relative w-full rounded-md brand-border p-4 not-prose", !isExpanded && "max-h-[400px] overflow-y-hidden mask-b-from-70")}>
        {/* topbar */}
        <div className="flex justify-between items-center pb-2">
          <div className="text-xs text-muted-foreground font-mono">{filename}</div>
          <Button variant="secondary" size="icon" onClick={copyToClipboard} className="">
            {copied ? <HugeiconsIcon icon={Tick01Icon} className="text-emerald-500" strokeWidth={3} /> : <HugeiconsIcon icon={Copy01FreeIcons} />}
          </Button>
        </div>
        {/* code */}
        <SyntaxHighlighter
          language={language}
          style={theme === "dark" ? oneDark : oneLight}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "0.875rem",
            wordBreak: "break-all",
            whiteSpace: "pre-wrap",
          }}
          wrapLines={true}
          showLineNumbers={showLineNumbers}
          PreTag="div"
        >
          {String(activeCode)}
        </SyntaxHighlighter>
      </div>
      {/* extender */}
      {!isExpanded && (
        <Button variant="secondary" size="lg" onClick={() => setIsExpanded(true)} className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 border border-gray-200">
          Expand
          <HugeiconsIcon icon={ArrowDown01Icon} />
        </Button>
      )}
    </div>
  );
};
