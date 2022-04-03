import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
      <div className="container mx-auto mt-10">
          <Header></Header>
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/review" element={<Review />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/blogs" element={<Blogs />}></Route>
              <Route path="/review" element={<Dashboard />}></Route>
          </Routes>
      </div>
  );
}

export default App;
