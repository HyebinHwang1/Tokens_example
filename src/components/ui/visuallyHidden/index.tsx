import { VisuallyHidden as VisuallyHiddenPrimitive } from "@radix-ui/react-visually-hidden";

export default function VisuallyHidden({
  children,
  ...props
}: React.ComponentProps<typeof VisuallyHiddenPrimitive>) {
  return (
    <VisuallyHiddenPrimitive {...props}>{children}</VisuallyHiddenPrimitive>
  );
}
