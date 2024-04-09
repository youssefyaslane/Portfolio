import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import "./Scroll.css";
export default function scroll() {
  return (
    <section className="scroll  flex ">
      <div className="cv ">
        <div className="cv_border ">
          <a>
            Resume
            <span>
              <FontAwesomeIcon icon={faFilePdf} />
            </span>
          </a>
        </div>
      </div>
      <div className="scroll_icon ">
        <div className="scroll_icon_border flex">
          <FontAwesomeIcon icon={faComputerMouse} />
          <p>scroll down</p>
        </div>
      </div>
    </section>
  );
}
