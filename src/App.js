import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/feedbackList";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <>
      <FeedbackProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>

          <AboutIconLink />
        </BrowserRouter>
      </FeedbackProvider>
    </>
  );
}

export default App;
