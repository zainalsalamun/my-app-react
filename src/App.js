import logo from './logo.svg';
import './App.css';
import JudulFile from './JudulFile';
import Navbar from './components/NavBar';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <div>
    //   <JudulFile />
    // </div>

    <div>
      <Navbar />
      <h1>Main Content Goes Here</h1>
    </div>
  );
}

export default App;
