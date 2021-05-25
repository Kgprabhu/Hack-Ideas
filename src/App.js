import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Routing } from './routes/Routing';
import { topReducer } from './redux/topReducer';

import './App.css';

function App() {
  const store = createStore(topReducer);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routing/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
