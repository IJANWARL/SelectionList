import logo from '../../assets/DeSmart-logo-black-500px.png';

import data from '../../utils/data';
import List from './List';

import './App.css';

const App = () => (
  <div className='app'>
    <header className='app-header'>
      <img src={logo} className='app-logo' alt='logo' />
      <p>Please select one item:</p>
    </header>
    <List data={data} />
  </div>
);


export default App;
