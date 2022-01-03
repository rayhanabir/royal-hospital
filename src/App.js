import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointments/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
