import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import './App.css'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'

const App = () => {
  return (
    <>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/'>
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
