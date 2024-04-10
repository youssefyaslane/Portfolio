import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import "./Scroll.css";

export default function Scroll() {
  // Lien vers votre CV PDF
  const cvUrl = "/Portfolio/public/youssef_yaslane_cv.pdf";

  const handleDownload = () => {
    // Créez un élément <a> temporaire pour déclencher le téléchargement
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "youssef_cv.pdf";
    document.body.appendChild(link);
    link.click();
    // Supprimez l'élément <a> temporaire après le téléchargement
    document.body.removeChild(link);
  };

  return (
    <section className="scroll flex">
      <div className="cv">
        <div className="cv_border">
          {/* Ajoutez onClick pour déclencher le téléchargement */}
          <a href={cvUrl} onClick={handleDownload}>
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
