import {  useState } from "react";
import { MobileStepper } from "@mui/material";
import Button from "@material-ui/core/Button";
import Replay from "@mui/icons-material/Replay";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import {  Row, Col,  } from "antd";
import alertify from "alertifyjs";
import "./exam.css";
import ExamHeader from "./ExamHeader";
const Exam = () => {
  const [Quiz_Set1, setQuiz] = useState([
    {
      queno: "0",
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
      queno: "1",
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
      queno: "2",
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
      queno: "3",
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
      queno: "4",
      que_id: 5,
      que: "5) A triangle has angles 60°,60° and 60°.State the type of triangle?",
      options: [
        { que_options: "Isosceles", selected: false, isTrueAnswer: false },
        { que_options: "Equilateral", selected: false, isTrueAnswer: true },
        { que_options: "Scalene", selected: false, isTrueAnswer: false },
      ],
      ans: "Equilateral",
    },
    {
      queno: "5",
      que_id: 6,
      que: "6) What is a third angle for a triangle where angle1 = 57° and angle2 = 92° ?",
      options: [
        { que_options: "45", selected: false, isTrueAnswer: false },
        { que_options: "60", selected: false, isTrueAnswer: false },
        { que_options: "31", selected: false, isTrueAnswer: true },
      ],
      ans: "31",
    },
    {
      queno: "6",
      que_id: 7,
      que: "7) Pythagoras theorem is applicable to which type of triangles?",
      options: [
        { que_options: "Right", selected: false, isTrueAnswer: true },
        { que_options: "Acute", selected: false, isTrueAnswer: false },
        { que_options: "Obtuse", selected: false, isTrueAnswer: false },
      ],
      ans: "Right",
    },
    {
      queno: "7",
      que_id: 8,
      que: "8) The triangle which has 2 sides congruent?",
      options: [
        { que_options: "Equilateral", selected: false, isTrueAnswer: false },
        { que_options: "Isosceles", selected: false, isTrueAnswer: true },
        { que_options: "Scalene", selected: false, isTrueAnswer: false },
      ],
      ans: "Isosceles",
    },
  ]);
  const [state, setState] = useState({
    activeStep: 0,
    Quiz_Set: Quiz_Set1,
    booleanonsubmit: false,
    Total: 0,
    open: false,
    catchmsg: "",
    errormsg: "",
  });
  const [stepAnswer, setStepAnswer] = useState();
  const handleNext = (e) => {
    setState({ activeStep: state.activeStep + 1 });
  };

  const handleBack = () => {
    setState({ activeStep: state.activeStep - 1 });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({ open: false });
  };

  const onInputChange = (e) => {
    // e.preventDefault();
    const Quiz_Set = Quiz_Set1;
    const nexState = Quiz_Set.map((card) => {
      if (card.queno !== e.target.name) return card;
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
    let list = Quiz_Set1;
    list.forEach((item, key) => {
      if (Math.abs(state.activeStep - key) <= 0) {
        // if(!item.options[key].selected){
        //   alertify.error("Cavablardan birini secin");
        // }else {
        //   setState({ activeStep: state.activeStep + 1 });
        // }
        // if(item.options[0].selected!==true && item.options[1].selected!==true  && item.options[2].selected!==true){
        //   alertify.error("Cavablardan birini secin");
        // }
        item.options.forEach((anslist, key) => {
          if (anslist.selected === true) {
            setStepAnswer(true);
          }
        });
      }
    });
    // console.log(nexState)
  };

  const onsubmit = () => {
    //   console.log(state.Quiz_Set)
    let list = Quiz_Set1;
    let count = 0;
    let notattempcount = 0;

    list.forEach((item, key) => {
      item.options.forEach((anslist, key) => {
        //  console.log("anslist.selected===>",anslist.selected)
        if (anslist.selected === true) {
          console.log(item.que_id, anslist.que_options); //---------------------USER ANSWERS LIST
          if (anslist.que_options === item.ans) {
            //   console.log("===>",anslist.que_options,item.ans)
            count = count + 1;
          }
          if (anslist.selected === anslist.isTrueAnswer) {
            console.log("cavab dogrudu");
            // count = count + 1;
          } else {
            console.log("cavab sevhdi");
          }
        } else {
          notattempcount = notattempcount + 1;
        }
      });
    });

    //-------------------------------------------------------------------------------------------------------------------
    //noteattempt ummi optionlarin sayidi. asagidaki kodun yerine bele bir sey yazmaliyam.
    // eger optionlarin icindeki selectlerdenbiri true deyilse onda bu islesin. noteAttamp lazim deyil.
    if (notattempcount <= 24 && notattempcount > 16) {
      // console.log(notattempcount);
      // setState({ booleanonsubmit: false, Total: count });
      alertify.error("Butun xanalari doldurun");
      // setState({
      //   catchmsg: "Please attempt all questions",
      //   errormsg: "error",
      //   open: true,
      // });
    } else {
      setState({ booleanonsubmit: true, Total: count });
    }
  };
  //------------------------------------------------------------------------------------------------------------------------
  const getQueno = (e) => {
    setState({ activeStep: parseInt(e.target.id) });
    // console.log(e.target.id)
  };
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
          <div className="Quiz-DisplayResult">
            <h2> The score is {state.Total} Out Of 8 </h2>
            <Button
              onClick={() => {
                setState({
                  booleanonsubmit: false,
                  activeStep: 0,
                  Quiz_Set1: Quiz_Set1,
                  Total: 0,
                });
              }}
            >
              {" "}
              <Replay /> Try again{" "}
            </Button>
          </div>
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
                            <label className="container">
                              <span className="option-index">{index_ans})</span>

                              {ans.que_options}
                              <input
                                key={index_ans}
                                type="radio"
                                name={item.queno}
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
                  state.activeStep === 7 ? (
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
      <Card className="card-transaction">
        <CardHeader className="cardHeaderCustom card-header">
          <CardTitle tag="h4">Questions</CardTitle>
        </CardHeader>
        <CardBody
          style={{ paddingTop: "1rem"}}
          className="card-body-exam-options"
        >
          <Row  justify="start">
          {Quiz_Set1 &&
            Quiz_Set1.map((item, index) => {
              return (
                <Col key={index} className="bg-light border"   sm={{span:6}} xs={{span: 6}} md={{span:2}} xl={{span:2}} lg={{span:2}}>
                <button
                  onClick={getQueno}
                  id={index}
                  type="button"
                  className={
                    item.options[0].selected !== true &&
                    item.options[1].selected !== true &&
                    item.options[2].selected !== true
                      ? "btn-outline-secondary"
                      : "btn-outline-primary"
                  }
                >
                 {index + 1}
                </button>
              </Col>
             
              );
            })}
        
          </Row>
        </CardBody>
      </Card>
     
    </>
  );
};

export default Exam;
