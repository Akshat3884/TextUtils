import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react'
import Footer from './components/Footer';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = function(){
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#141C23';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
    }
    
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading='Enter Your Text Below To Analyze' mode={mode}/>
          </Route>
   </Switch>
    </div>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
