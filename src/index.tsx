import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {App} from './components/app/app.tsx';
import {PLACES_COUNT} from './const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App placesCount={PLACES_COUNT}/>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
