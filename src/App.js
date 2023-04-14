import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Login from './components/Login';
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" Component={Homepage}></Route>
            <Route path="/login" Component={Login}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
