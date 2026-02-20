"use client";
import { Copy01FreeIcons, Tick01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Button } from "../ui/button";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({ language, filename, code, highlightLines = [], tabs = [] }: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist ? tabs[activeTab].language || language : language;
  const activeHighlightLines = tabsExist ? tabs[activeTab].highlightLines || [] : highlightLines;

  const { setTheme, theme } = useTheme();

  return (
    <div className="relative w-full rounded-md brand-border p-4">
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-2! text-xs transition-colors ${activeTab === index ? "text-white" : "text-muted-foreground hover:text-zinc-200"}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex justify-between items-center pb-3">
            <div className="text-xs text-muted-foreground font-mono">{filename}</div>
            <Button variant="secondary" size="icon" onClick={copyToClipboard} className="">
              {copied ? <HugeiconsIcon icon={Tick01Icon} className="text-emerald-500" strokeWidth={3} /> : <HugeiconsIcon icon={Copy01FreeIcons} />}
            </Button>
          </div>
        )}
      </div>
      <SyntaxHighlighter
        language={activeLanguage}
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
        showLineNumbers={true}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber) ? "rgba(255,255,255,0.1)" : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        PreTag="div"
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  );
};
