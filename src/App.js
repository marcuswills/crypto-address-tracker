import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import CryptoAddressViewer from './components/CryptoAddressViewer'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/address-details/:address_value' exact component={CryptoAddressViewer} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
