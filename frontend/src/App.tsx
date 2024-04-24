import { useState } from "react";
import { SignIn } from "./Pages/Signin";
import { SignUp } from "./Pages/Signup";
import { Blog } from "./Pages/Blog";
import { Blogs } from "./Pages/Blogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Publish } from "./Components/Publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/publish" element={<Publish />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
