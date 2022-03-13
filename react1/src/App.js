import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PostProvider from './contexts/PostContext';

function App() {
  
  return (
    <PostProvider>
      <div className="container d-flex justify-content-center flex-column">
        <Header />
        <hr />
        <Main />
        <hr />
        <Footer />
    </div>
    </PostProvider>
  );
}

export default App;
