import React from "react";

const Usage = () => {
  return (
    <article>
      <header>
        <h1 className="doc_title">Exam Usage</h1>
      </header>
      <ul>
        <li className="my-4">
          When you start the exam, you will have 5 questions (this can be vary
          according to your company regulations) to answer. Please note that you
          should answer all questions.
        </li>
        <li>
          After answering all questions please submit with "Submit" button.
        </li>
        <li className="my-4">
          After clicking the submit button, you can see your exam result.
        </li>
        <li>You can select any question by number to review.</li>
      </ul>
      <header className="my-4">
        <h1 className="doc_title">Video Course Usage</h1>
      </header>
      <div className="alert alert-danger fade show" role="alert">
        <h4 className="alert-heading">Important</h4>
        <div className="alert-body">
          You have to watch the video from start to end without forward.
          Othrwise the video'll be marked as unwatched
        </div>
      </div>
      <ul></ul>
    </article>
  );
};

export default Usage;
