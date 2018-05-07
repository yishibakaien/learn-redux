import React from 'react';
import RouterMap from './router/router.js';
import {Provider} from 'react-redux';

import makeStore from './store/store.js';

const store = makeStore();

const App = () => {
  return (
    <Provider store={store}>
      <RouterMap />
    </Provider>
  );
}

export default App;
