import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import SignUp from './Component/SignUp';
import PrivateComponent from './Component/PrivateComponent';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import ProductList from './Component/Products';
import UpdateProduct from './Component/Updateproduct';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      {/* <h1>HelloReact</h1> */}
      <Nav />
      <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/update/:id" element={<UpdateProduct />}></Route>
        <Route path="/logout" ></Route>
        <Route path="/profile" element={<h1>Profile component </h1>}></Route>
        </Route>

        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
