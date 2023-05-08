import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import { Signin, Signup } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;