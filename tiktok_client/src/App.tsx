import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Upload from './pages/Upload'
import Header from './components/Header/Header';
const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route component={Upload} path='/upload' />
        <Route component={Home} path='/' />
      </Switch>
      <div className="App">
      </div>
    </HashRouter>
  );
}

export default App;
