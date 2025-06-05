import { cn } from "@/lib/utils";
import VisuallyHidden from "@/components/ui/visuallyHidden";
import {
  BottomSheet,
  BottomSheetContent,
  BottomSheetTitle,
  BottomSheetTrigger,
} from ".";

interface SimpleBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;

  className?: string;
  showHandleBar?: boolean;
  showClose?: boolean;
  triggerButton?: React.ReactNode;
}

export default function SimpleBottomSheet({
  title,
  triggerButton,
  isOpen,
  children,
  onClose,
  className,
  showHandleBar = true,
  showClose = false,
}: SimpleBottomSheetProps) {
  return (
    <BottomSheet open={isOpen} onOpenChange={() => isOpen && onClose()}>
      {triggerButton && (
        <BottomSheetTrigger asChild>{triggerButton}</BottomSheetTrigger>
      )}
      <BottomSheetContent
        showHandleBar={showHandleBar}
        showClose={showClose}
        onClose={onClose}
        className={cn("min-h-[300px] gap-0", className)}
      >
        <BottomSheetTitle asChild>
          <VisuallyHidden>{title}</VisuallyHidden>
        </BottomSheetTitle>
        {children}
      </BottomSheetContent>
    </BottomSheet>
  );
}
