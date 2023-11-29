'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Icons } from '@/config/icons';

interface ActionButtonProps {
  items: string[];
  selectAll: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ items, selectAll }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Actions <Icons.dropdown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.length > 1 && (
          <DropdownMenuItem onClick={selectAll}>Select all</DropdownMenuItem>
        )}
        <DropdownMenuItem>Copy to Clipboard</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionButton;
