import React from "react";
import { Card } from "antd";
const ExamResult = ({ state }) => {
  return (
    <Card
      title="Exam Results"
      //   style={{ padding: 0, marginBottom: " 1.5rem" }}
    >
      <div className="Quiz-DisplayResult">
        {/* <h2> The score is {state.Total} of {state.quizLength}</h2> */}
        <table className="table table-sm card-table table-bordered">
          <thead>
            <tr>
              <th scope="col">TOTAL</th>
              <th scope="col">CORRECT</th>
              <th scope="col">WRONG</th>
              <th scope="col">SCORE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{state.quizLength}</th>
              <td>{state.CorrectAnswer}</td>
              <td>{state.quizLength - state.CorrectAnswer}</td>
              <td>{state.CorrectAnswer * 5}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ExamResult;
