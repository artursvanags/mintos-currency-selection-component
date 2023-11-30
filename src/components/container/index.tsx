'use client';

import { useState } from 'react';
import { CurrencyDescription } from '@/lib/currencies';
import { cn } from '@/lib/utils';

import { Icons } from '@/config/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import ToolBar from './components/tool-bar';

interface SelectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CurrencyDescription[];
}

const SelectionContainer: React.FC<SelectionContainerProps> = ({
  data,
  ...props
}) => {
  const items = data;
  if (!items) return null;

  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  const filteredItem = items.filter((item) =>
    item.code.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const onClick = (code: string) => {
    if (selectedItem.includes(code)) {
      setSelectedItem(selectedItem.filter((item) => item !== code));
    } else {
      setSelectedItem([...selectedItem, code]);
    }
  };

  const clearSelection = () => {
    setSelectedItem([]);
  };

  const selectAll = () => {
    setSelectedItem(items.map((item) => item.code));
  };

  return (
    <div
      className={cn(props.className, 'flex w-full max-w-[680px] flex-col p-4')}
      {...props}
    >
      <div className="space-y-2">
        <ToolBar
          items={items.map((item) => item.code)}
          selectedItems={selectedItem}
          onClear={clearSelection}
          onSelectAll={selectAll}
        />

        <Input
          aria-label="search-input"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search by currency code"
        />

        {selectedItem.length > 0 && (
          <div className="flex max-h-64 flex-col overflow-y-auto rounded border bg-primary-foreground p-4">
            <span className="pb-4 text-sm font-semibold text-muted-foreground">
              Selected item/-s
            </span>
            <div
              aria-label="selected-items-list"
              className="grid grid-cols-2 gap-2 rounded sm:grid-cols-6"
            >
              {selectedItem.map((item) => (
                <span
                  className={
                    'relative flex h-9 items-center justify-center rounded-md border bg-background text-sm font-medium'
                  }
                  key={item}
                >
                  <Icons.clear
                    aria-label="remove-item"
                    className="absolute -right-1 -top-1 h-4 w-4 cursor-pointer rounded bg-secondary-foreground text-secondary"
                    onClick={() =>
                      setSelectedItem(selectedItem.filter((i) => i !== item))
                    }
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        <div
          className="grid max-h-64 grid-cols-2 gap-2 overflow-y-auto rounded border p-4 sm:grid-cols-6"
          aria-label="item-list"
        >
          {filteredItem.map((item) => (
            <Button
              aria-pressed={selectedItem.includes(item.code)}
              key={item.code}
              className={
                selectedItem.includes(item.code) ? 'bg-primary-foreground' : ''
              }
              variant={'outline'}
              size={'sm'}
              onClick={() => onClick(item.code)}
            >
              <span className="mr-auto">
                {selectedItem.includes(item.code) ? (
                  <Icons.clear className="mr-2 h-4 w-4" />
                ) : (
                  <Icons.select className="mr-2 h-4 w-4" />
                )}
              </span>

              {item.code}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectionContainer;
