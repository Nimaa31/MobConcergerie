import "./styles.css";

import { Route, Routes } from "react-router-dom";
import  Home  from "./routes/Home";
import  About from "./routes/About";
import  Service  from "./routes/Service";
import Links from "./routes/Links";
import  Contact  from "./routes/Contact";

export default function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/service" element= {<Service/>}/>
          <Route path="/links" element= {<Links/>}/>
          <Route path="/contact" element= {<Contact/>}/>
        </Routes>


      </div>
  );
}
