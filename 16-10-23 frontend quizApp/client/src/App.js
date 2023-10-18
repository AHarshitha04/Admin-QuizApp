import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartExam from './pages/StartExam/StartExam';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartExam/>}/>
      </Routes>
      {/* <StartExam/> */}
      
    </div>
  );
}

export default App;
