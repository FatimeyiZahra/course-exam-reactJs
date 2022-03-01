import React, { useState } from "react";
import { Card, Row, Col, Form, Input, Button } from "antd";

const { TextArea } = Input;
const UpdateProfile = () => {
  const [name, setName] = useState("Stanislav")
  // console.log(name)
  return (
    <Card>
      <Card>
        <Form>
          <Row gutter={[16, 16]}>
            <Col span={12} xs={24} sm={12} md={12} lg={12} className="mb-1">
              <Input
                type="text"
                name="name"
                id="nameMulti"
                value={name}
                onChange={e => setName(e.target.value)}
                // placeholder="First Name"
                style={{padding:" 10px 14px"}}
              />
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12} className="mb-1">
              <Input
                type="text"
                name="lastname"
                id="lastNameMulti"
                placeholder="Last Name"
                style={{padding:" 10px 14px"}}
              />
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12} className="mb-1">
              <Input
                type="text"
                name="city"
                id="cityMulti"
                style={{padding:" 10px 14px"}}
                placeholder="City"
              />
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12} className="mb-1">
              <Input
                type="text"
                name="country"
                id="CountryMulti"
                style={{padding:" 10px 14px"}}
                placeholder="Country"
              />
            </Col>
            <Col span={12} xs={24} sm={24} md={24} lg={24} className="mb-1">
              <TextArea
                defaultValue="hi, please write short information about you"
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Col>

            <Col sm="12">
              <div className="d-flex">
                <Button
                  className="me-1 btn-primary"
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                >
                  Submit
                </Button>
                <Button outline="true" color="secondary" type="reset">
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </Card>
  );
};

export default UpdateProfile;
