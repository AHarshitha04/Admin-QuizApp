import { Routes, Route } from 'react-router-dom';
import './App.css';
// import StartExam from './pages/StartExam/StartExam';
// import Quiz_interface from './pages/StartExam/Quiz_interface';
import Upload from './pages/StartExam/Upload';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Upload />} />

        {/* <Route path='/' element={<Quiz_interface />}/> */}
      </Routes>
      {/* <StartExam/> */}
      
    </div>
  );
}

export default App;
