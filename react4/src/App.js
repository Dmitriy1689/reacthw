import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PostDetail from './components/Main/PostScreen/PostDetail/PostDetail';
import MainScreen from './components/MainScreen/MainScreen';

function App() {
  
  return (
      <div className="container d-flex justify-content-center flex-column">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path='/:id' element={<PostDetail/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

  