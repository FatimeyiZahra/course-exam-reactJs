import { useState, useCallback } from "react";
import { MobileStepper } from "@mui/material";
import Button from "@material-ui/core/Button";
// import Replay from "@mui/icons-material/Replay";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { Row, Col } from "antd";
// import alertify from "alertifyjs";
import "./exam.css";
import ExamHeader from "./ExamHeader";
import ExamResult from "./ExamResultTable";
import UserAnswer from "./UserAnswer";
const Exam = () => {
  const [Quiz_Set1, setQuiz] = useState([
    {
      que_id: 1,
      que: "1) How many sides are equal in a scalene triangle?",
      options: [
        { que_options: "3", selected: false, isTrueAnswer: false },
        { que_options: "2", selected: false, isTrueAnswer: false },
        { que_options: "0", selected: false, isTrueAnswer: true },
      ],
      ans: "0",
    },
    {
      que_id: 2,
      que: "2) The angles of a triangle are 90°,35° and 55°.What type of triangle is this?",
      options: [
        { que_options: "Right Angled", selected: false, isTrueAnswer: true },
        { que_options: "Obtuse Angled", selected: false, isTrueAnswer: false },
        { que_options: "Acute Angled", selected: false, isTrueAnswer: false },
      ],
      ans: "Right Angled",
    },
    {
      que_id: 3,
      que: "3) The perimeter of an equilateral triangle is 24cm.Length of each side(in cm) is?",
      options: [
        { que_options: "9", selected: false, isTrueAnswer: false },
        { que_options: "6", selected: false, isTrueAnswer: false },
        { que_options: "8", selected: false, isTrueAnswer: true },
      ],
      ans: "8",
    },
    {
      que_id: 4,
      que: "4) The sum of angles of a triangle is?",
      options: [
        { que_options: "90", selected: false, isTrueAnswer: false },
        { que_options: "150", selected: false, isTrueAnswer: false },
        { que_options: "180", selected: false, isTrueAnswer: true },
      ],
      ans: "180",
    },
    {
      que_id: 5,
      que: "5) A triangle has angles 60°,60° and 60°.State the type of triangle?",
      options: [
        { que_options: "Isosceles", selected: false, isTrueAnswer: false },
        { que_options: "Equilateral", selected: false, isTrueAnswer: true },
        { que_options: "Scalene", selected: false, isTrueAnswer: false },
      ],
      ans: "Equilateral",
    },
  ]);
  const [state, setState] = useState({
    quizLength: 0,
    selectedLength: 0,
    quizOptionLength: 0,
    activeStep: 0,
    Quiz_Set: Quiz_Set1,
    booleanonsubmit: false,
    CorrectAnswer: 0,
    open: false,
    catchmsg: "",
    errormsg: "",
  });
  // console.log(Quiz_Set1[1].options.length)
  const [userAnswers, setUserAnswers] = useState([]);
  // console.log(userAnswers);

  const handleNext = useCallback(() => {
    setState({ activeStep: state.activeStep + 1 });
  }, [state]);

  const handleBack = useCallback(() => {
    setState({ activeStep: state.activeStep - 1 });
  }, [state]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ open: false, activeStep: Quiz_Set1.length - 1 });
  };

  const onInputChange = useCallback(
    (e) => {
      // console.log(e.target.name);
      // e.preventDefault();
      const Quiz_Set = Quiz_Set1;
      const nexState = Quiz_Set.map((card) => {
        if (card.que_id !== parseInt(e.target.name)) return card;
        return {
          ...card,
          options: card.options.map((opt) => {
            const checked = opt.que_options === e.target.value;
            return {
              ...opt,
              selected: checked,
            };
          }),
        };
      });
      setQuiz(nexState);
    },
    [Quiz_Set1]
  );

  const onsubmit = () => {
    let list = Quiz_Set1;
    let correct = 0; //count evvelki adi
    let notattempcount = 0;
    let quizLength = 0;
    let selectedLength = 0;
    list.forEach((item, key) => {
      quizLength = quizLength + 1;
      item.options.forEach((anslist, key) => {
        //  console.log("anslist.selected===>",anslist.selected)
        if (anslist.selected === true) {
          selectedLength = selectedLength + 1;
          // console.log(item.que_id, anslist.que_options); //---------------------USER ANSWERS LIST
          // setUserAnswers(item.que_id, anslist.que_options)
          if (anslist.que_options === item.ans) {
            //   console.log("===>",anslist.que_options,item.ans)
            correct = correct + 1;
          }
        } else {
          notattempcount = notattempcount + 1;
        }
      });
    });

    //-------------------------------------------------------------------------------------------------------------------
    if (selectedLength !== Quiz_Set1.length) {
      // console.log(notattempcount);
      setState({
        activeStep: Quiz_Set1.length - 1,
        booleanonsubmit: false,
        CorrectAnswer: correct,
        catchmsg: "Please attempt all questions",
        errormsg: "error",
        open: true,
      });
      // alertify.error("Butun xanalari doldurun");

      // setState({
      //   catchmsg: "Please attempt all questions",
      //   errormsg: "error",
      //   open: true,
      // });
    } else {
      //--------------------------------------------------user asnwers
      list.forEach((item, key) => {
        item.options.forEach((anslist, key) => {
          if (anslist.selected === true) {
            setUserAnswers((prevState) => [
              ...prevState,
              { que_id: item.que_id, a: anslist.que_options },
            ]);
          }
        });
      });
      setState({
        booleanonsubmit: true,
        CorrectAnswer: correct,
        quizLength: quizLength,
        selectedLength: selectedLength,
      });
    }
  };
  //------------------------------------------------------------------------------------------------------------------------
  const getQueno = useCallback((e) => {
    setState({ activeStep: parseInt(e.target.id) });
  }, []);

  const Snackbarrender = () => {
    return state.open ? (
      <Snackbar
        open={state.open}
        autoHideDuration={5000}
        onClose={handleClose}
        style={{ marginTop: "0px", width: "100%" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={state.errormsg}
        >
          {state.catchmsg}
        </MuiAlert>
      </Snackbar>
    ) : null;
  };

  return (
    <>
      <ExamHeader />
      <div className="Quiz_render_container card">
        {state.booleanonsubmit ? (
          <ExamResult state={state} />
        ) : (
          <div className="Quiz_container_display">
            {Quiz_Set1 &&
              Quiz_Set1.map((item, index) => {
                if (Math.abs(state.activeStep - index) <= 0) {
                  return (
                    <div className="card-body" key={index}>
                      <h3 className="Quiz_Question">Question </h3>
                      <div className="Quiz_que">{item.que}</div>
                      <hr></hr>
                      <h3 className="Quiz_options"> Answer Options </h3>
                      {item.options.map((ans, index_ans) => {
                        index_ans = index_ans + 1;
                        return (
                          <div
                            key={index_ans}
                            className="Quiz_multiple_options"
                          >
                            {/*----------------------------------------------------------- optionslarin indexini gosterir */}
                            <label
                              className="container"
                              // onClick={getAnswer}
                            >
                              <span className="option-index">{index_ans})</span>

                              {ans.que_options}
                              <input
                                key={index_ans}
                                type="radio"
                                name={item.que_id}
                                value={ans.que_options}
                                checked={!!ans.selected}
                                onChange={onInputChange}
                                id={index_ans}
                              />

                              <span className="checkmark"></span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  );
                } else {
                  return null;
                }
              })}

            <div className="Quiz-MobileStepper">
              <MobileStepper
                variant="dots"
                // variant="text"
                // variant="progress"
                steps={Quiz_Set1.length}
                position="static"
                activeStep={state.activeStep}
                nextButton={
                  state.activeStep === Quiz_Set1.length - 1 ? (
                    <Button size="small" onClick={onsubmit}>
                      Submit
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={state.activeStep === Quiz_Set1.length}
                    >
                      Next
                    </Button>
                  )
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={state.activeStep === 0}
                  >
                    Back
                  </Button>
                }
              />
            </div>
          </div>
        )}

        {Snackbarrender()}
      </div>
      {state.booleanonsubmit ? (
        <UserAnswer Quiz_Set1={Quiz_Set1} />
      ) : (
        <Card className="card-transaction">
          <CardHeader className="cardHeaderCustom card-header">
            <CardTitle tag="h4">Questions</CardTitle>
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
                      xs={{ span: 8 }}
                      md={{ span: 3 }}
                      xl={{ span: 2 }}
                      lg={{ span: 2 }}
                    >
                      <button
                        onClick={getQueno}
                        id={index}
                        type="button"
                        className={
                          item.options.find((x) => x.selected === true)
                            ? "btn-outline-primary"
                            : "btn-outline-secondary"
                          // item.options[0].selected !== true &&
                          // item.options[1].selected !== true &&
                          // item.options[2].selected !== true
                          //   ? "btn-outline-secondary"
                          //   : "btn-outline-primary"
                        }
                      >
                        {index + 1} Q
                      </button>
                    </Col>
                  );
                })}
            </Row>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default Exam;
