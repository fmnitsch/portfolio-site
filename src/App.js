import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav";
import MobileNav from "./Components/MobileNav";
//Pages
import Home from "./Pages/Home";
import BlogAllPosts from "./Pages/BlogAllPosts";
import BlogOnePost from "./Pages/BlogOnePost";
//Styles
import "./Styles/App.scss";

function App() {
  const [location, setLocation] = useState("home");
  return (
    <div className="App">
      <MobileNav location={location} />
      <Nav location={location} />
      <div className="page-container">
        <Route
          component={() => <Home setLocation={setLocation} />}
          path="/"
          exact
        />
        <Route
          component={() => <BlogAllPosts setLocation={setLocation} />}
          path="/blog"
          exact
        />
        <Route component={BlogOnePost} path="/blog/:slug" />
      </div>
    </div>
  );
}

export default App;
