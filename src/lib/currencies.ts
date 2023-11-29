import currencyList from "currency-list";

export type CurrencyDescription = ReturnType<typeof currencyList.get>;

export const getCurrencies: CurrencyDescription[] = Object.values(currencyList.getAll("en"));
