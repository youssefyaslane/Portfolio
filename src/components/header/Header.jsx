import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [showmodel, setshowmodel] = useState(false);
  return (
    <header className=" flex">
      <div className="h-logo">
        <p>{" < Youssef Yaslane /> "}</p>
      </div>
      <nav className="navigation">
        <ul className=" nav-header flex">
          <li>
            <a href="Home">Home</a>
          </li>

          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Eduction</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="Menu">
        <button onClick={() => setshowmodel(true)} className="menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {showmodel && (
        <div className="fixed">
          <ul className="model ">
            <li>
              <button onClick={() => setshowmodel(false)} className="close">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>
            <li>
              <a href="Home">Home</a>
            </li>

            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Eduction</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
