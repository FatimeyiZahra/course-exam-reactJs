import "../cardBrowserState/index.css";

// ** Reactstrap Imports
import { Card, CardBody, CardText, CardTitle, CardHeader } from "reactstrap";

const CardWithBadge = ({ trackBgColor }) => {
  const statesArr = [
    {
      title: "Google Chrome",
      value: "Rejected Course",
      isRejected: true,
      isReference: false,
      isWaiting: false,
    },
    {
      title: "Internet Explorer",
      value: "waiting course",
      isReference: false,
      isRejected: false,
      isWaiting: true,
    },
    {
      title: "Opera Mini",
      value: "Reference Only",
      isReference: true,
      isRejected: false,
      isWaiting: false,
    },
    {
      title: "Apple Safari",
      value: "waiting course",
      isReference: false,
      isRejected: false,
      isWaiting: true,
    },
    {
      title: "Mozila Firefox",
      value: "Rejected Course",
      isReference: false,
      isRejected: true,
      isWaiting: false,
    },
  ];

  const renderStates = () => {
    return statesArr.map((state) => {
      return (
        <div key={state.title} className="browser-states list-group-item">
          <div className="d-flex">
            <h6 className="align-self-center mb-0 f-400">{state.title}</h6>
          </div>
          <div className="d-flex align-items-center">
            {state.isReference === true ? (
              <div
                className="fw-bold text-body-heading me-1 badge badge-status-orange"
                style={{ width: "100%", height: "26px" }}
              >
                {state.value}
              </div>
            ) : (
              <div className="fw-bold text-body-heading me-1 d-none"></div>
            )}
            {state.isWaiting === true ? (
              <div
                className="fw-bold text-body-heading me-1 badge badge-status-yellow"
                style={{ width: "100%", height: "26px" }}
              >
                {state.value}
              </div>
            ) : (
              <div className="fw-bold text-body-heading me-1 d-none"> </div>
            )}
            {state.isRejected === true ? (
              <div
                className="fw-bold text-body-heading me-1 badge badge-status-red"
                style={{ width: "100%", height: "26px", color: "#fff" }}
              >
                {state.value}
              </div>
            ) : (
              <div className="fw-bold text-body-heading me-1 d-none"> </div>
            )}
            {/* <div className='fw-bold text-body-heading me-1'>{state.value}</div> */}
          </div>
        </div>
      );
    });
  };

  return (
    <Card className="card-browser-states">
      <CardHeader className="cardHeaderCustom">
        <div>
          <CardTitle tag="h4">Latest Courses</CardTitle>
          <CardText className="font-small-2">Counter August 2020</CardText>
        </div>
      </CardHeader>
      <CardBody>{renderStates()}</CardBody>
    </Card>
  );
};

export default CardWithBadge;
