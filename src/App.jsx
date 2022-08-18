import './App.css';
import Catalogo from './components/Catalogo';
import Header from './components/Header';
import Footer from './components/Footer';
import { movieList } from './data/movies'

function App() {
  return (
    <>
    <Header />
    <Catalogo dados={movieList} />
    <Footer />
      </>
  );
}

export default App;
