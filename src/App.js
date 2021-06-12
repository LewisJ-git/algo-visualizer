import Header from './components/Header';
import HeaderDeco from './components/HeaderDeco';
import NavigationBar from './components/NavigationBar';
// import ScrollAnimation from 'react-animate-on-scroll';
import Credits from './components/Credits';
import MainBackground from './components/MainBackground';

function App() {
  return (
    <div className="App">
      <MainBackground />
      <Header />
      <HeaderDeco />
      <NavigationBar /> 
      <Credits />
      
    </div>
  );
}

export default App;
