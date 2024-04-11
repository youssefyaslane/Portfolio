import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import "./Scroll.css";

export default function Scroll() {
  // Lien vers votre CV PDF
  const cvUrl = "/Portfolio/public/youssef_yaslane_cv .pdf";

  return (
    <section className="scroll flex">
      <div className="cv">
        <div className="cv_border">
          {/* Utilisez l'attribut download pour télécharger le fichier au lieu de onClick */}
          <a href={cvUrl} download="youssef_cv.pdf">
            Resume
            <span>
              <FontAwesomeIcon icon={faFilePdf} />
            </span>
          </a>
        </div>
      </div>
      <div className="scroll_icon">
        <div className="scroll_icon_border flex">
          <FontAwesomeIcon icon={faComputerMouse} />
          <p>scroll down</p>
        </div>
      </div>
    </section>
  );
}
