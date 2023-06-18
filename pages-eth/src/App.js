import "./App.css";
import Aside from "./components/aside/aside";
import Header from "./components/header/header";
import Feed from "./pages/feed";
import Feedback from "./pages/feedback";
import Main from "./pages/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Aside />
        <Routes>
          <Route path="/" element={<Main fetchArticles={fetchArticles} />} />
          <Route
            path="/feed"
            element={<Feed fetchArticles={fetchArticles} />}
          />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

let fetchArticles = async (start, quantity, cb) => {
  const response  = await fetch(
    `/api/articles/?start=${start}&quantity=${quantity}`
  );
  const articles  = await response.json();
  cb(articles);
};

export default App;
