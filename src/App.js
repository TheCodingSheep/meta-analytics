import Sidebar from './components/sidebar/Sidebar';
// import Meta from './components/Meta/Meta';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from './components/Common/Loader';

function App() {
  return (
    <div className="App">
  <Sidebar/>
  <Loader pageLoader={true} />
  {/* <Meta /> */}
    </div>
  );
}

export default App;
