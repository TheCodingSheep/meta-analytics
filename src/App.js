import Sidebar from './components/sidebar/Sidebar';
import Meta from './components/Meta/Meta';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
  {/* <Sidebar/> */}
  <Meta />
    </div>
  );
}

export default App;
