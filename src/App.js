import { Route, Routes, BrowserRouter } from "react-router-dom";
import Addproduct from "./pages/Addproduct";
import Homepage from "./pages/Homepage";
import { ToastContainer } from "react-toastify";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/add-product" element={<Addproduct />} />
              <Route path="/edit-product/:id" element={<EditProduct />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </>
  );
}

export default App;
