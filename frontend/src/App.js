import React, { useEffect, useState } from 'react';
import './App.css';
import './all.js';
import { Route, Switch } from 'react-router-dom';
import Navigation from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAppContext } from "./contextApp/useContextApp";
import NormalPage from "./Normal/NormalPage";
import Admin from "./Admin/Admin";
import AdminLogin from "./Normal/component/Login/Login";
import NarBar from './Normal/shared/NavBar';
import Footer from './Normal/shared/Footer';

function App() {

  const {
    NavigationConfig,
    userRole
  } = useAppContext();

  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(window.location.href);
  }, [])




  return (
    <div>
      <Router>
        {window.location.href.toString().split('/')[3].includes("admin") == false && <NarBar />}
        <Switch>
          {
            NavigationConfig.map((item, index) => {
              return <Route path={item.url} component={item.component} />
            })
          }
        </Switch>
        {window.location.href.toString().split('/')[3].includes("admin") == false && <Footer />}

      </Router>

    </div>
  );
}

export default App;
