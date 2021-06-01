/* import logo from './logo.svg'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import HeaderJumbotron from './components/HeaderJumbotron';
import Home from './components/Home'
import MyFooter from './components/MyFooter'
import './App.css';


function App() {
  return (
    <div className="App">
  <MyNav/>
  <HeaderJumbotron />
  <Home/>
  <MyFooter/>
    </div>
  );
}

export default App;
