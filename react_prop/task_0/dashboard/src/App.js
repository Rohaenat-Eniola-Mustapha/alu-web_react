import React from 'react';
import Header from './Header/Header'; // Corrected path
import Login from './Login/Login';   // Corrected path
import Footer from './Footer/Footer'; // Corrected path
// import Notifications from '../Notifications/Notifications'; // Assuming Notifications is at the src level
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;