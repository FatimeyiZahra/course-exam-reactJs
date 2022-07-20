import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const Dependencies = () => {
  return (
    <article>
      <header>
        <h1 className="doc_title" style={{marginBottom:"32px"}}>Dependencies</h1>
      </header>
      <h1 className="header-title">All Dependencies</h1>
      <div className="alert alert-danger fade show" role="alert">
        <h4 className="alert-heading">Heads Up!</h4>
        <div className="alert-body">
          The following dependencies are common and required to run the
          template. Do not try to remove any of these dependencies. You may add
          / update / remove any other dependencies according to your
          requirements.
        </div>
      </div>
      <CopyBlock
        text={`              "@ant-design/icons": "^4.7.0",
              "@emotion/react": "^11.7.1",
              "@emotion/styled": "^11.6.0",
              "@hookform/resolvers": "^2.8.8",
              "@material-ui/core": "^4.12.3",
              "@material-ui/lab": "^4.0.0-alpha.60",
              "@mui/icons-material": "^5.4.2",
              "@mui/material": "^5.4.2",
              "@testing-library/jest-dom": "^5.16.2",
              "@testing-library/react": "^12.1.2",
              "@testing-library/user-event": "^13.5.0",
              "alertifyjs": "^1.13.1",
              "antd": "^4.18.7",
              "mdbreact": "^5.2.0",
              "react": "^18.0.0",
              "react-code-blocks": "^0.0.9-0",
              "react-dom": "^18.0.0",
              "react-feather": "^2.0.9",
              "react-hook-form": "^7.27.1",
              "react-redux": "^7.2.6",
              "react-router-dom": "^5.2.0",
              "react-scripts": "5.0.0",
              "react-select": "^5.2.2",
              "react-video-js-player": "^1.1.1",
              "reactstrap": "^9.0.1",
              "redux": "^4.1.2",
              "redux-devtools-extension": "^2.13.9",
              "redux-thunk": "^2.4.1",
              "styled-components": "^5.3.3",
              "web-vitals": "^2.1.4"`}
        showLineNumbers
        codeBlock
        language="jsx"
        theme={dracula}
      />
    </article>
  );
};

export default Dependencies;
