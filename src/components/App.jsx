import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './Navbar/Navbar';
import UserRoutes from 'UserRoutes';

import { store } from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
