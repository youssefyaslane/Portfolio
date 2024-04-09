import "./Home.css";
export default function Home() {
  return (
    <section className="Home">
      <div className="name ">
        <p>{" <developer> "}</p>
        <h1>
          {"I am"} <br /> a data scientist{" "}
        </h1>
        <p>
          {" "}
          <span></span>
          {"  </developer> "}
        </p>
      </div>
      <div className="myimage">
        <img src="./my.png" alt="Description de l'image" />
      </div>
      <div className="aboutme ">
        <p>{" <About me> "}</p>
        <span>
          {" "}
          As a future computer science engineer specializing in artificial
          intelligence and data science, my passion lies in creating innovative
          solutions. My goal is to shape the technological future by harnessing
          the potential of AI to solve complex problems.{" "}
        </span>
        <p>{" </About me> "}</p>
      </div>
    </section>
  );
}
