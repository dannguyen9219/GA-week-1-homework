import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
