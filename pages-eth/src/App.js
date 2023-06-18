import "./App.css";
import Aside from "./components/aside";
import Header from "./components/header";
import Feed from "./components/pages/feed";
import Feedback from "./components/pages/feedback";
import Main from "./components/pages/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main-container">
          <Aside />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
