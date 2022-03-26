import React from "react";
import "antd/dist/antd.min.css";
import "./index.css";
import { Row, Col } from "antd";
import Statistics from "../../component/statistics/Statistics";
// import CardTransactions from "../../component/cardTransactions/CardTransactions";
import CardBrowserState from "../../component/cardBrowserState/CardBrowserState";
import CardWithBadge from "../../component/cardWithBadge/CardWithBadge";
import TimeLine from "../../component/timeLine/TimeLine";

const DashBoard = () => {
  return (
    // className="site-statistic-demo-card"
    <div>
      <Row gutter={[16, 16]} style={{marginBottom: "2rem"}}>
        <Statistics />
      </Row>
      <Row gutter={[16, 16]}>
        {/* <Col xs={24} md={8} lg={8}>
          <CardTransactions />
        </Col> */}
        <Col xs={24} md={8} lg={8}>
          <CardBrowserState />
        </Col>
        <Col xs={24} md={8} lg={8}>
          <CardWithBadge/>
        </Col>
        <Col xs={24} md={8} lg={8}>
          <TimeLine/>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;
