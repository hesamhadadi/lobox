export interface DropdownOption {
    label: string;
    value: string;
    icon?: string;
    category?: string;
  }
  
  export interface DropdownProps {
    options: DropdownOption[];
    placeholder?: string;
    onSelect: (selected: DropdownOption) => void;
    onAdd?: (newItem: DropdownOption) => void;
    enableSearch?: boolean;
    enableAdd?: boolean;
  }