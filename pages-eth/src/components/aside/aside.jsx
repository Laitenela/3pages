import { Link } from "react-router-dom";
import SideButton from "../micro-components/side-button";

function Aside() {
  return (
    <aside className="aside">
      <Link to="/">
        <SideButton name="Главное" id="main" />
      </Link>

      <Link to="/feed">
        <SideButton name="Новости" id="feed" />
      </Link>

      <Link to="/feedback">
        <SideButton name="Отзывы" id="feedback" />
      </Link>
    </aside>
  );
}

export default Aside;
