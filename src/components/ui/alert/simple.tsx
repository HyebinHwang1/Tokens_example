import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface SimpleAlertDialogProps {
  description: string;
  actionButtonText: string;
  isOpen: boolean;
  onClose: () => void;

  triggerButtonText?: string;
  title?: string;
}

export function SimpleAlertDialog({
  isOpen,
  onClose,
  triggerButtonText,
  title,
  description,
  actionButtonText = "確認",
}: SimpleAlertDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      {triggerButtonText && (
        <AlertDialogTrigger asChild>
          <Button>{triggerButtonText}</Button>
        </AlertDialogTrigger>
      )}

      <AlertDialogContent>
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>{actionButtonText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
