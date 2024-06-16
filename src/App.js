import './App.css';
import AllPosts from './components/AllPosts';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <>
  <Navbar/>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<AllPosts/>}/>
   <Route path="/create" element={<Create />} />
   <Route path="/edit" element={<Edit />} />
   </Routes>
   </BrowserRouter> 
  </>
  );
}

export default App;