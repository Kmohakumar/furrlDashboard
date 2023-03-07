
import './App.css';
import Feed from './components/Feed';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <Feed />
      {/* <Login></Login>
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Feed />} />
      </Routes>
  </BrowserRouter> */}

    </div>
  );
}

export default App;
