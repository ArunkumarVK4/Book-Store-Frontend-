import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AddBook from "./Components/AddBook";
import Books from './Components/Book/Books';
import About from './Components/About';
import BookDetails from "./Components/Book/BookDetails";


//http://localhost:5000/books 

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/add" element={<AddBook/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/books/:id" element={<BookDetails/>}/>
          <Route path="/about" element={<About/>}/>

        </Routes>
      </main>
    </>
  );
}

export default App;
