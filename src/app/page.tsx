import SelectionContainer from '@/components/container';
import { getCurrencies } from '@/lib/currencies';

export default function Page() {
  const currencyData = getCurrencies;

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <SelectionContainer data={currencyData} />
    </div>
  );
}
