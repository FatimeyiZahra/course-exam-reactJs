import React from "react";
import "./style.css";
import { CopyBlock, dracula } from "react-code-blocks";
const Installation = () => {
  return (
    <article>
      <header>
        <h1 className="doc_title">Installation</h1>
      </header>
      <p>You don't need to install or configure any tools.</p>
      <h1 className="header-title">Guide</h1>
      <hr></hr>
      <div className="card">
        <div className="card-body">
          <p>First of all, make sure you have installed Node and npm / yarn</p>
          <div className="my-4 alert alert-success fade show" role="alert">
            <h4 className="alert-heading">Tip</h4>
            <div className="alert-body">
              Yarn package manager is recommended
            </div>
          </div>
          <div className="alert alert-warning fade show" role="alert">
            <h4 className="alert-heading">Warning</h4>
            <div className="alert-body">
              Please make sure you use the node’s LTS version which is
              recommended by the official node site and not the one with the
              latest features or previous versions.
            </div>
          </div>
          <div className="alert alert-danger fade show" role="alert">
            <h4 className="alert-heading">Important</h4>
            <div className="alert-body">
              If you decide to use <strong>npm</strong>. Make sure you use
              following command:{" "}
              <strong>npm install --force --legacy-peer-deps</strong>
            </div>
          </div>
          <ul className="mb-3">
            <li>
              After downloading zip from ThemeForest, unzip it in your desired
              location.
            </li>
            <li>
              Move to template folder and open this folder in console /
              terminal.
            </li>
            <li>Run below command in console:</li>
          </ul>
          <div className="my-4 " style={{ fontFamily: "IBM Plex Mono" }}>
            <CopyBlock
              text={`# For Yarn (Highly Recommended)
yarn
              
# For npm
npm install --force --legacy-peer-deps`}
              showLineNumbers
              codeBlock
              language="jsx"
              theme={dracula}
            />
          </div>
          <ul className="mb-3">
            <li>Now to run development server, run below command:</li>
          </ul>
          <div className="my-4 " style={{ fontFamily: "IBM Plex Mono" }}>
            <CopyBlock
              text={`# For Yarn
yarn start
              
 # For npm
npm start`}
              showLineNumbers
              codeBlock
              language="jsx"
              theme={dracula}
            />
          </div>
          <ul className="mb-3">
            <li>
              Visit{" "}
              <a
                href="http://localhost:3000/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://localhost:3000/
              </a>{" "}
              to check frontend.
            </li>
          </ul>
          <div className="my-3 alert alert-warning fade show" role="alert">
            <h4 className="alert-heading">Warning</h4>
            <div className="alert-body">
              If you have another process running at port <code>3000</code> then
              you might have some other URL. You can see the URL for this
              project from console.
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Installation;
