import { Route, Routes, BrowserRouter } from "react-router-dom";
import Addproduct from "./pages/Addproduct";
import Homepage from "./pages/Homepage";
import { ToastContainer } from "react-toastify";

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
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </>
  );
}

export default App;
