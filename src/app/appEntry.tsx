import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '@/shared/base.css';
import { appRouter } from './appRouter';
import { Provider as ReduxProvider } from 'react-redux';
import store, {persistor} from '../store/appStore';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={appRouter()}/>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
);
