import React, { useState } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppContext } from "./context/context";

const LazyHome = React.lazy(() => import("./pages/homepage/HomePage"));
const LazyAbout = React.lazy(() => import("./pages/aboutpage/AboutPage"));
const LazyService = React.lazy(() => import("./pages/servicepage/ServicePage"));

function App() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  return (
    <AppContext.Provider value={{ showNav, setShowNav }}>
      <Layout>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <React.Suspense fallback="Loading...">
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route
            path="/service"
            element={
              <React.Suspense fallback="Loading...">
                <LazyService />
              </React.Suspense>
            }
          />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
