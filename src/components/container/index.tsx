'use client';

import { useState } from 'react';
import { CurrencyDescription } from '@/lib/currencies';

import { Icons } from '@/config/icons';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import ActionBar from './components/action-bar';
import { Input } from '../ui/input';

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
      className={cn(
        props.className,
        'flex flex-col space-y-2 p-4 w-full lg:w-[680px]',
      )}
      {...props}
    >
      <ActionBar
        items={selectedItem}
        onClear={clearSelection}
        onSelectAll={selectAll}
      />
      <div>
        <Input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search by currency code"
        />
      </div>
      {selectedItem.length > 0 && (
        <div className=" flex max-h-64 flex-col overflow-y-auto rounded border bg-primary-foreground p-4">
          <span className="pb-4 text-sm font-semibold text-muted-foreground">
            Selected item/-s
          </span>
          <div className="grid sm:grid-cols-4 md:grid-cols-6 gap-2 rounded">
            {selectedItem.map((item) => (
              <Button
                key={item}
                size={'sm'}
                variant={'outline'}
                onClick={() =>
                  setSelectedItem(selectedItem.filter((i) => i !== item))
                }
              >
                <Icons.clear className=" mr-auto h-4 w-4" />
                {item}
              </Button>
            ))}
          </div>
        </div>
      )}
      <div className="max-h-64 overflow-y-auto border p-4">
        <div className="grid sm:grid-cols-4 md:grid-cols-6 gap-2">
          {filteredItem.map((item) => (
            <Button
              key={item.code}
              variant={'outline'}
              size={'sm'}
              disabled={selectedItem.includes(item.code)}
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
