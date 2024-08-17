import './App.css';
import LoginPage from './LoginPage';
import Footer from './Footer';
import Header from './Header';
import Particle from './Particle';

function App() {
  return (
    <div className="App">
      <Particle/>
      <div className="App-header">
        <Header/>
        <LoginPage/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
