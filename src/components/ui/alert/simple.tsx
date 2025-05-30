import {
  Alert,
  AlertAction,
  AlertFooter,
  AlertContent,
  AlertDescription,
  AlertHeader,
  AlertTitle,
  AlertTrigger,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface SimpleAlertProps {
  description: string;
  actionButtonText: string;
  isOpen: boolean;
  onClose: () => void;

  triggerButtonText?: string;
  title?: string;
}

export default function SimpleAlert({
  isOpen,
  onClose,
  triggerButtonText,
  title,
  description,
  actionButtonText = "確認",
}: SimpleAlertProps) {
  return (
    <Alert open={isOpen} onOpenChange={onClose}>
      {triggerButtonText && (
        <AlertTrigger asChild>
          <Button>{triggerButtonText}</Button>
        </AlertTrigger>
      )}

      <AlertContent>
        <AlertHeader>
          {title && <AlertTitle>{title}</AlertTitle>}
          <AlertDescription>{description}</AlertDescription>
        </AlertHeader>
        <AlertFooter>
          <AlertAction>{actionButtonText}</AlertAction>
        </AlertFooter>
      </AlertContent>
    </Alert>
  );
}
