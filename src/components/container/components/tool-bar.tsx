'use client';

import { Icons } from '@/config/icons';
import { Button } from '@/components/ui/button';

import ActionButton from './action-button';
import ThemeToggleButton from '@/components/global/themeToggleButton';

interface ToolBarProps {
  onClear: () => void;
  onSelectAll: () => void;
  items: string[];
  selectedItems: string[];
}
const ToolBar: React.FC<ToolBarProps> = ({
  items,
  selectedItems,
  onSelectAll,
  onClear,
}) => {
  return (
    <div className="flex">
      <ThemeToggleButton />
      <div className="ml-auto flex gap-2">
        {selectedItems.length > 0 && (
          <Button aria-label="clear-all" variant={'outline'} onClick={onClear}>
            <Icons.clear className="mr-2 h-4 w-4" />
            Clear
          </Button>
        )}
        <Button
          aria-label="select-all"
          variant={'outline'}
          disabled={items.length === selectedItems.length}
          onClick={onSelectAll}
        >
          Select All
        </Button>
        <ActionButton items={selectedItems} />
      </div>
    </div>
  );
};

export default ToolBar;
