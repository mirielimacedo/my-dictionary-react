import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Brazil" />
        </main>
        <footer className="App-footer">
          This project was coded by {""}
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            Mirieli Maria{" "}
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/mirielimacedo/dictionary-appllication-react"
            target="_blank"
            rel=" noopener noreferrer"
          >
            open-source on GitHub {""}
          </a>
          and{""}
          <a
            href="https://app.netlify.com/sites/my-dictionary-app-shecodes/deploys/663321ef5ac4787049621491"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {""} hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
