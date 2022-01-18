import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import Bio from "./component/Bio";
import Introduction from "./component/Introduction";
import VisitedCounter from "./untils/counter";
// import { withRouter } from "react-router-dom";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <div className="introduction">
          <Bio />
          <Introduction />
        </div>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
        <VisitedCounter />
      </div>
    </main>
  );
}

export default App;
