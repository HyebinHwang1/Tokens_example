import * as React from "react";

import { cn } from "@/lib/utils";
import { useContext } from "react";

interface CardProps extends React.ComponentProps<"div"> {
  theme?: "white" | "black";
}

interface CardContextType {
  theme: "white" | "black";
}

const CardContext = React.createContext<CardContextType>({ theme: "white" });

function Card({ className, theme = "white", ...props }: CardProps) {
  return (
    <CardContext.Provider value={{ theme }}>
      <div
        data-slot="card"
        className={cn(
          "flex flex-col rounded-xl border py-6 shadow-sm w-48",
          theme === "white"
            ? "bg-white text-gray-900 border-gray-300"
            : "bg-gray-900 text-white border-gray-700",
          className
        )}
        {...props}
      />
    </CardContext.Provider>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start pb-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  const { theme } = useContext(CardContext);

  return (
    <div
      data-slot="card-title"
      className={cn(
        "leading-none font-semibold",
        theme === "white" ? "text-gray-900" : "text-white",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  const { theme } = React.useContext(CardContext);
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm",
        theme === "white" ? "text-gray-600" : "text-gray-300",
        className
      )}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
