import { createContext } from 'react';

export const Quotes = {
  quoteList: ['fraseando 1', 'fraseando 2'],
  other: 'por fora',
};

export const QuotesContext = createContext(Quotes);
