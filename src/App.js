import './App.css';
import Booklist from './components/Booklist';
import Nav from './components/Nav';
import {BookProvider} from './BookContext/BookContext' 
import Addbook from './components/Addbook';
function App() {
  return (
    <div className="App">
      <div className='header'>
      <BookProvider>
      <Nav/>
    <Addbook/>
     <Booklist/>
      </BookProvider>
      </div>
    </div>
  );
} 

export default App;

