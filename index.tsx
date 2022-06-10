import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QuotesContext, Quotes } from './Quotes';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <QuotesContext.Provider value={Quotes}>
    <StrictMode>
      <App />
    </StrictMode>
  </QuotesContext.Provider>
);
