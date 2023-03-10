import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { store, persistor } from 'redux/store';

import AuthLayout from './components/AuthLayot/AuthLayout';
import Layout from 'components/Layout/Layout';
import UserRoutes from 'UserRoutes';

function App() {
  return (
    <Provider store={store}>
      <AuthLayout>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <Layout />
            <UserRoutes />
          </BrowserRouter>
        </PersistGate>
      </AuthLayout>
    </Provider>
  );
}

export default App;
