"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { motion } from "motion/react";
import * as React from "react";

import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  variant?: "default" | "ghost" | "underline";
  size?: "sm" | "default" | "lg";
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a <Tabs />");
  }
  return context;
}

// --- Root Component ---

interface TabsRootProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: "default" | "ghost" | "underline";
  size?: "sm" | "default" | "lg";
}

const Tabs = React.forwardRef<HTMLDivElement, TabsRootProps>(({ children, defaultValue, value, onValueChange, variant = "default", size = "default", className, ...props }, ref) => {
  const [activeValue, setActiveValue] = React.useState(value || defaultValue || "");

  React.useEffect(() => {
    if (value !== undefined) {
      setActiveValue(value);
    }
  }, [value]);

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      setActiveValue(newValue);
      onValueChange?.(newValue);
    },
    [onValueChange],
  );

  return (
    <TabsContext.Provider
      value={{
        value: activeValue,
        onValueChange: handleValueChange,
        variant,
        size,
      }}
    >
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
});
Tabs.displayName = "Tabs";

const tabsListVariants = cva("relative inline-flex items-center justify-center rounded-lg transition-all duration-300 w-full", {
  variants: {
    variant: {
      default: "bg-secondary",
      ghost: "bg-transparent",
      underline: "bg-transparent border-b border-border rounded-none",
    },
    size: {
      sm: "h-8 p-1",
      default: "h-9 p-1",
      lg: "h-12 p-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const tabTriggerVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-1.5 text-sm font-medium transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex-1",
  {
    variants: {
      variant: {
        default: "text-muted-foreground hover:text-foreground data-[state=active]:text-primary-foreground",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-accent data-[state=active]:text-primary-foreground data-[state=active]:bg-transparent",
        underline: "text-muted-foreground hover:text-foreground data-[state=active]:text-accent-foreground rounded-none",
      },
      size: {
        sm: "px-2.5 py-1 text-xs",
        default: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface TabItem {
  id: string;
  label?: string;
  icon?: IconSvgElement;
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  indicatorColor?: string;
}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(({ className, items, indicatorColor = "hsl(var(--hu-accent))", ...props }, ref) => {
  const { value, onValueChange, variant, size } = useTabs();
  const [activeTabBounds, setActiveTabBounds] = React.useState({
    left: 0,
    width: 0,
  });

  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  React.useEffect(() => {
    const activeIndex = items.findIndex((item) => item.id === value);
    const activeTab = tabRefs.current[activeIndex];

    if (activeTab) {
      const tabRect = activeTab.getBoundingClientRect();
      const containerRect = activeTab.parentElement?.getBoundingClientRect();

      if (containerRect) {
        setActiveTabBounds({
          left: tabRect.left - containerRect.left,
          width: tabRect.width,
        });
      }
    }
  }, [value, items]);

  return (
    <div ref={ref} className={cn(tabsListVariants({ variant, size }), className)} {...props}>
      {/* Animated indicator */}
      <motion.div
        className={cn("absolute z-10", variant === "underline" ? "bottom-0 h-0.5 rounded-none" : "top-1 bottom-1 rounded-md")}
        style={{
          backgroundColor: variant === "underline" ? "hsl(var(--hu-foreground))" : indicatorColor,
        }}
        initial={false}
        animate={{
          left: activeTabBounds.left,
          width: activeTabBounds.width,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />
      {/* Tab triggers */}
      {items.map((item, index) => {
        const isActive = value === item.id;

        return (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={cn(tabTriggerVariants({ variant, size }), "relative z-20 text-muted-foreground data-[state=active]:text-black gap-2")}
            data-state={isActive ? "active" : "inactive"}
            onClick={() => onValueChange(item.id)}
            type="button"
          >
            {item.icon && (
              <span className="[&_svg]:size-4">
                <HugeiconsIcon icon={item.icon} />
              </span>
            )}
            {item.label}
          </button>
        );
      })}
    </div>
  );
});
TabsList.displayName = "TabsList";

// --- Content Component ---

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(({ className, value, children, ...props }, ref) => {
  const { value: activeValue } = useTabs();
  const isActive = value === activeValue;

  if (!isActive) return null;

  const { onDrag, onDragStart, onDragEnd, onAnimationStart, ...divProps } = props;

  return (
    <motion.div
      ref={ref}
      className={cn("ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      {...divProps}
    >
      {children}
    </motion.div>
  );
});
TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList };
