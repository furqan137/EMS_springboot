import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployeeComponent from "./component/AddEmployeeComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import AboutComponent from "./component/AboutComponent";
import ContactComponent from "./component/ContactComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <HeaderComponent />
        <div className="container" style={{ flex: "1", paddingBottom: "20px" }}>
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employee" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddEmployeeComponent />} />
            <Route path="/add-employee/:id" element={<AddEmployeeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
