import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AboutMe from '../about/AboutMe';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="main-div">  
      <Router>
        <Switch>
          <Route exact path="/" component={AboutMe}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router> 
      <Footer />   
    </div>
  );
}

export default App;
