import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Routing } from './routes/Routing';
import { topReducer } from './redux/topReducer';
import { Header } from './component/header/Header.jsx';
import { Footer } from './component/footer/Footer.jsx';

import './App.css';

function App() {
  const store = createStore(topReducer);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="page-content">
          <Router>
            <Routing/>
          </Router>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
