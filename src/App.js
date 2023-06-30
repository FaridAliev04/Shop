import { Fragment } from 'react';
import Navbar from "./companet/Navbar.jsx"
import './css/style.css';
import List from './companet/List.jsx';
import Sell from './companet/Sell.jsx';

function App() {
  return <Fragment>
    <Navbar/>
    <List/>
    <Sell/>
  </Fragment>
}

export default App;
