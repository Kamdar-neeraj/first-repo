// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Layout from "./Layout";
import Page7 from "./Page7";
import Contact from "./Contact";
import Quote from "./Quote";
import { Aside } from "./Aside";
import { Layout1 } from "./Layout1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Aside" element={<Aside />} />
          <Route path="Axios" element={<Layout1 />} />

          <Route path="Page1" element={<Page1 />} />
          <Route path="Page2" element={<Page2 />} />
          <Route path="Page3" element={<Page3 />} />
          <Route path="Page4" element={<Page4 />} />
          <Route path="Page5" element={<Page5 />} />
          <Route path="Page6" element={<Page6 />} />
          <Route path="Page7" element={<Page7 />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Quote" element={<Quote />} />
        </Route>
        {/* <Route path="/Aside" element={<Layout1 />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />

          <Route path="Page1" element={<Page1 />} />
          <Route path="Page2" element={<Page2 />} />
          <Route path="Page3" element={<Page3 />} />
          <Route path="Page4" element={<Page4 />} />
          <Route path="Page5" element={<Page5 />} />
          <Route path="Page6" element={<Page6 />} />
          <Route path="Page7" element={<Page7 />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Quote" element={<Quote />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
