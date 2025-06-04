"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SetStateAction } from "react";
import { Dispatch } from "react";

function Dropdown({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
}

function DropdownTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownArrowButton({
  showArrow = true,
  open,
  children,
  ...props
}: React.ComponentProps<typeof Button> & {
  showArrow?: boolean;
  open?: boolean;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      variant="ghost"
      className={cn("flex items-center gap-2", props.className)}
      {...props}
    >
      {children}
      {showArrow && (
        <ChevronDownIcon
          className={cn(
            "ml-auto size-4 transition-transform duration-300 ease-in-out",
            open && "rotate-180"
          )}
        />
      )}
    </Button>
  );
}

function DropdownContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-gray-200 p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
}

function DropdownItem({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      className={cn(
        "relative flex cursor-pointer hover:bg-gray-100 items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {props.children}
    </DropdownMenuPrimitive.Item>
  );
}

interface SimpleDropdownProps {
  open: boolean;
  buttonText: string;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  items: {
    label: string;
    onClick: () => void;
  }[];
}

function SimpleDropdown({
  open,
  buttonText,
  onOpenChange,
  items,
}: SimpleDropdownProps) {
  return (
    <Dropdown open={open} onOpenChange={onOpenChange}>
      <DropdownTrigger asChild>
        <DropdownArrowButton open={open}>{buttonText}</DropdownArrowButton>
      </DropdownTrigger>
      <DropdownContent>
        {items.map((item) => (
          <DropdownItem key={item.label} onClick={item.onClick}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </Dropdown>
  );
}

export {
  Dropdown,
  DropdownPortal,
  DropdownTrigger,
  DropdownContent,
  DropdownGroup,
  DropdownArrowButton,
  DropdownItem,
  SimpleDropdown,
};
