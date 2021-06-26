import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <div className='App'>
          <Switch>
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
