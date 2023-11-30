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
import { useToast } from '@/components/ui/use-toast';

interface ActionButtonProps {
  items: string[];
}

const ActionButton: React.FC<ActionButtonProps> = ({ items }) => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    const text = items.join(', ');
    navigator.clipboard.writeText(text);
    toast({
      title: 'Success!',
      description: `You have copied ${items.length} items to clipboard.`,
    });
  };

  return (
    <>
      {items.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              Actions <Icons.dropdown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => copyToClipboard()}>
              Copy to Clipboard
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default ActionButton;
