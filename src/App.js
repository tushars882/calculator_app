
import './App.css';
import './index.css'
import Converter from "./components/Converter"
import Weather from './components/weather';

function App() {
  return (
    <div className='bg'>
    
    <div className='container2'>
    <Weather/>
    </div>
    <div className="App">
      <Converter/>
    </div>
    </div>
  );
}

export default App;
