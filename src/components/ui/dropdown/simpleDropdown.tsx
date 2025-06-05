import {
  Dropdown,
  DropdownArrowButton,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from ".";

interface SimpleDropdownProps {
  open: boolean;
  buttonText: string;
  onOpenChange: (open: boolean) => void;
  items: {
    label: string;
    onClick: () => void;
  }[];
}

export default function SimpleDropdown({
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
