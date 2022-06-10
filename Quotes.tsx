import React, { createContext } from 'react';

export const Quotes = {
  quoteList: ['fraseando 1', 'fraseando 2'],
};

export const QuotesContext = createContext(Quotes);
