import './App.css';
import AllPosts from './components/AllPosts';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<AllPosts/>}/>
   </Routes>
   </BrowserRouter> 
  </>
  );
}

export default App;