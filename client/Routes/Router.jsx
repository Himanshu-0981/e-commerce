import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Page404 } from "../src/pages";
import { Navbar } from "../src/components";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
