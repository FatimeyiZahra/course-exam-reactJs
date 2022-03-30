import { useState } from "react";
import { MobileStepper } from "@mui/material";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { Row, Col } from "antd";
import "./exam.css";
const Exam = ({ Quiz_Set1 }) => {
  const [state, setState] = useState({
    quizLength: 0,
    activeStep: 0,
  });

  //------------------------------------------------------------------------------------------------------------------------
  const getQueno = (e) => {
    setState({ activeStep: parseInt(e.target.id) });
    // console.log(e.target.id)
  };

  return (
    <>
      <Card className="card-transaction">
        <CardHeader className="cardHeaderCustom card-header">
          <CardTitle tag="h4">Your Answers</CardTitle>
        </CardHeader>
        <CardBody
          style={{ paddingTop: "1rem" }}
          className="card-body-exam-options"
        >
          <Row justify="start">
            {Quiz_Set1 &&
              Quiz_Set1.map((item, index) => {
                return (
                  <Col
                    key={index}
                    className="bg-light border"
                    sm={{ span: 6 }}
                    xs={{ span: 6 }}
                    md={{ span: 2 }}
                    xl={{ span: 2 }}
                    lg={{ span: 2 }}
                  >
                    {item.options.map((ans, index_ans) => {
                      index_ans = index_ans + 1;
                      if (
                        ans.selected === true &&
                        ans.selected === ans.isTrueAnswer
                      ) {
                        return (
                          <button
                            key={index_ans}
                            onClick={getQueno}
                            id={index}
                            type="button"
                            className={
                              item.options[0].selected !== true &&
                              item.options[1].selected !== true &&
                              item.options[2].selected !== true
                                ? "btn-outline-secondary"
                                : "btn-outline-success"
                            }
                          >
                            {index + 1} Q
                          </button>
                        );
                      }
                      if (
                        ans.selected === true &&
                        ans.selected !== ans.isTrueAnswer
                      ) {
                        return (
                          <button
                            key={index_ans}
                            onClick={getQueno}
                            id={index}
                            type="button"
                            className={
                              item.options[0].selected !== true &&
                              item.options[1].selected !== true &&
                              item.options[2].selected !== true
                                ? "btn-outline-secondary"
                                : "btn-outline-danger"
                            }
                          >
                            {index + 1} Q
                          </button>
                        );
                      }
                    })}
                  </Col>
                );
              })}
          </Row>
        </CardBody>
      </Card>
      <div className="Quiz_render_container card">
        <div className="Quiz_container_display">
          {Quiz_Set1 &&
            Quiz_Set1.map((item, index) => {
              if (Math.abs(state.activeStep - index) <= 0) {
                return (
                  <div className="card-body" key={index}>
                    <h3 className="Quiz_Question">Review - Question {index+1} </h3>
                    <div className="Quiz_que">{item.que}</div>
                    <hr></hr>
                    <h3 className="Quiz_options"> Answer Options </h3>
                    {item.options.map((ans, index_ans) => {
                      index_ans = index_ans + 1;

                      if (
                        ans.selected === true &&
                        ans.selected === ans.isTrueAnswer
                      ) {
                        return (
                          <div
                            key={index_ans}
                            className="Quiz_multiple_options"
                          >
                            {/*----------------------------------------------------------- optionslarin indexini gosterir */}
                            <label
                              className="container text-green"
                              // onClick={getAnswer}
                            >
                              <span className="option-index">{index_ans})</span>

                              {ans.que_options}
                              <input
                                disabled="disabled"
                                key={index_ans}
                                type="radio"
                                name={item.que_id}
                                value={ans.que_options}
                                defaultChecked={!!ans.selected}
                                id={index_ans}
                              />

                              <span className="checkmark"></span>
                            </label>
                          </div>
                        );
                      }
                      if (
                        ans.selected === true &&
                        ans.selected !== ans.isTrueAnswer
                      ) {
                        return (
                          <div
                            key={index_ans}
                            className="Quiz_multiple_options"
                          >
                            {/*----------------------------------------------------------- optionslarin indexini gosterir */}
                            <label
                              className="container text-danger" // onClick={getAnswer}
                            >
                              <span className="option-index">{index_ans})</span>

                              {ans.que_options}
                              <input
                                disabled="disabled"
                                key={index_ans}
                                type="radio"
                                name={item.que_id}
                                value={ans.que_options}
                                defaultChecked={!!ans.selected}
                                id={index_ans}
                              />

                              <span className="checkmark"></span>
                            </label>
                          </div>
                        );
                      }
                      if (ans.selected === false && ans.isTrueAnswer === true) {
                        return (
                          <div
                            key={index_ans}
                            className="Quiz_multiple_options"
                          >
                            {/*----------------------------------------------------------- optionslarin indexini gosterir */}
                            <label
                              className="container text-green" // onClick={getAnswer}
                            >
                              <span className="option-index ">
                                {index_ans})
                              </span>

                              {ans.que_options}
                              <input
                                disabled="disabled"
                                key={index_ans}
                                type="radio"
                                name={item.que_id}
                                value={ans.que_options}
                                defaultChecked={!!ans.selected}
                                id={index_ans}
                              />

                              <span className="checkmark"></span>
                            </label>
                          </div>
                        );
                      }
                      if (
                        ans.selected === false &&
                        ans.isTrueAnswer === false
                      ) {
                        return (
                          <div
                            key={index_ans}
                            className="Quiz_multiple_options"
                          >
                            {/*----------------------------------------------------------- optionslarin indexini gosterir */}
                            <label
                              className="container" // onClick={getAnswer}
                            >
                              <span className="option-index ">
                                {index_ans})
                              </span>

                              {ans.que_options}
                              <input
                                disabled="disabled"
                                key={index_ans}
                                type="radio"
                                name={item.que_id}
                                value={ans.que_options}
                                defaultChecked={!!ans.selected}
                                id={index_ans}
                              />

                              <span className="checkmark"></span>
                            </label>
                          </div>
                        );
                      }
                    })}
                  </div>
                );
              } else {
                return null;
              }
            })}

          <div className="Quiz-MobileStepper">
            <MobileStepper
              //   variant="dots"
              variant="text"
              // variant="progress"
              steps={Quiz_Set1.length}
              position="static"
              activeStep={state.activeStep}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Exam;
