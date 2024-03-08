import './App.css';
import Card from './Component/Card';
import Navbar from './Component/Navbar';
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
   <div>
<BrowserRouter>
    <Navbar/>
   <Routes>
    <Route exact path='/' element={<Card key={"general"} category={"general"} pageSize={6} ></Card>}/>
    <Route exact path='/business' element={<Card key={"business"} category={"business"} pageSize={6}></Card>}/>
    <Route exact path='/entertainment' element={<Card key={"entertainment"} category={"entertainment"} pageSize={6} ></Card>}/>
    <Route exact path='/health' element={<Card key={"health"} category={"health"} pageSize={6} ></Card>}/>
    <Route exact path='/science' element={<Card key={"science"} category={"science"}pageSize={6}></Card>}/>
    <Route exact path='/sports' element={<Card key={"sports"} category={"sports"} pageSize={6}></Card>}/>
    <Route exact path='/technology' element={<Card key={"technology"} category={"technology"} pageSize={6}></Card>}/>
   </Routes>
</BrowserRouter>
    
   
   </div>
  );
}

export default App;
