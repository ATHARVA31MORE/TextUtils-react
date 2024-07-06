
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import {
//  BrowserRouter as Router,
//  Routes,
//Route
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleEvent = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#075363';
      showAlert('Dark mode Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  };

  return (
    <>
      {/*<Router>*/}
        <Navbar title="TextUtils" mode={mode} togglemode={toggleEvent} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/*<Routes>
            <Route exact path="/about" element={<About />} />
           <Route exact path="/" element={*/}<TextForm showAlert={showAlert} heading="Enter your text below" mode={mode} />{/*} />
          </Routes>*/}
        </div>
      {/*</Router>*/}
    </>
  );
}

export default App;

