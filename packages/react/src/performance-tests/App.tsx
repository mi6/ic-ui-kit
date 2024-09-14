import React from "react";
import { Routes, Route } from "react-router-dom";
import IcButtonPage from "./pages/IcButton";
import MultipleIcButtonsPage from "./pages/MultipleIcButtons";
import IcCheckboxPage from "./pages/IcCheckbox";

// Using React router to create pages
// HashRouter (https://reactrouter.com/en/main/router-components/hash-router) is used so reloading the page doesn't re-direct to 404
const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/">
            <Route path="buttons" element={<IcButtonPage />} />
            <Route path="multiple-buttons" element={<MultipleIcButtonsPage />} />
            <Route path="checkbox" element={<IcCheckboxPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
