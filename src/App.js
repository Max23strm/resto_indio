import './App.css';
import Navbar from './componentes/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home.js';
import Footer from './componentes/Footer.js'
import Menu from './pages/Menu.js'
import About from './pages/About.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;