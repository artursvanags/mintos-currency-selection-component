'use client';

import { Icons } from '@/config/icons';
import { Button } from '@/components/ui/button';

import ActionButton from './action-button';
import ThemeToggleButton from '@/components/global/themeToggleButton';

interface ActionBarProps {
  onClear: () => void;
  onSelectAll: () => void;
  items: string[];
}
const ActionBar: React.FC<ActionBarProps> = ({
  onClear,
  items,
  onSelectAll,
}) => {
  return (
    <div className="flex">
      <ThemeToggleButton />
      <div className="ml-auto flex gap-2">
        {items.length > 0 && (
          <Button variant={'outline'} onClick={onClear}>
            <Icons.clear className="mr-2 h-4 w-4" />
            Clear
          </Button>
        )}
        <ActionButton items={items} selectAll={onSelectAll} />
      </div>
    </div>
  );
};

export default ActionBar;
