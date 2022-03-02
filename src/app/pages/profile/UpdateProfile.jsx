import React, { useState } from "react";
import { Card, Row, Col, Form, Input } from "antd";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import "antd/dist/antd.min.css";
import UserAvatar from "../../../assets/image/avatar/avatar.png";
import {
  CardBody,
  CardTitle,
  Button,
  Label,
  CardHeader,
  FormFeedback,
} from "reactstrap";

const { TextArea } = Input;
const UpdateProfile = () => {
  const [name, setName] = useState("Stanislav");
  const data = { avatar: "" };
  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : UserAvatar);
  // console.log(avatar);
  const onChange = (e) => {
    const reader = new FileReader(),
      files = e.target.files;
    // console.log(files)
    reader.onload = function () {
      setAvatar(reader.result);
      // console.log(reader)
    };
    reader.readAsDataURL(files[0]);
  };
  const handleImgReset = () => {
    setAvatar(UserAvatar);
  };
  // const userAvatar2 = (data.avatar ? data.avatar :  UserAvatar);
  // const [fileList, setFileList] = useState([
  //   {
  //     uid: "-1",
  //     name: "image.png",
  //     status: "done",
  //     url: userAvatar2,
  //   },
  // ]);
  // console.log(fileList);
  // const onChangee = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  // };
  // const dummyRequest = ({ file, onSuccess }) => {
  //   setTimeout(() => {
  //     onSuccess("ok");
  //   }, 0);
  // };

  // console.log(name)
  return (
    <Card>
      <Card>
        <Form className="update-user-info">
          <Row gutter={[16, 16]}>
          <Col span={12} xs={24} sm={24} md={24} lg={24} className="mb-1">
              <div className="d-flex">
                <div className="me-25">
                  <img
                    className="rounded me-50"
                    src={avatar}
                    alt="Generic placeholder "
                    height="100"
                    width="100"
                  />
                </div>
                <div className="d-flex align-items-end mt-75 ms-1">
                  <div>
                    <Button
                      tag={Label}
                      type="file"
                      className="mb-75 me-75 color-white"
                      size="sm"
                      color="primary"
                    >
                      Upload
                      <Input
                        type="file"
                        onChange={onChange}
                        hidden
                        accept="image/*"
                      />
                    </Button>
                    <Button
                      className="mb-75 btn-outline-secondary"
                      color="secondary"
                      size="sm"
                      onClick={handleImgReset}
                    >
                      Reset
                    </Button>
                    <p className="mb-0">
                      Allowed JPG, GIF or PNG. Max size of 800kB
                    </p>
                  </div>
                </div>
              </div>
            
              {/* from anrdesign */}

              {/* <ImgCrop rotate>
                <Upload
                  customRequest={dummyRequest}
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChangee}
                >
                  {fileList.length < 1 && "+ Upload"}
                </Upload>
              </ImgCrop> */}
              
              {/* from reactstrap */}
              {/* <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file"  onChange={(e) => console.log(e.target.value)}/> */}
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12} className="mb-1">
              <label className="form-label form-label">First Name</label>
              <Input
                type="text"
                name="name"
                id="nameMulti"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name"
              />
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12} className="mb-1">
              <label className="form-label form-label">Last Name</label>
              <Input
                type="text"
                name="lastname"
                id="lastNameMulti"
                placeholder="Last Name"
              />
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12} className="mb-1">
              <label className="form-label form-label">City</label>
              <Input
                type="text"
                name="city"
                id="cityMulti"
                placeholder="City"
              />
            </Col>
            <Col span={12} xs={24} sm={12} md={12} lg={12} className="mb-1">
              <label className="form-label form-label">Country</label>
              <Input
                type="text"
                name="country"
                id="CountryMulti"
                placeholder="Country"
              />
            </Col>
            <Col span={12} xs={24} sm={24} md={24} lg={24} className="mb-1">
              <label className="form-label form-label">About</label>
              <TextArea
                defaultValue="hi, please write short information about you"
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Col>
            

            <Col span={12} xs={24} sm={24} md={24} lg={24}>
              <div className="d-flex" style={{ justifyContent: "end" }}>
                <Button
                  className="me-1 btn-primary text-right"
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                >
                  Submit
                </Button>
                {/* <Button color="secondary" type="reset">
                  Reset
                </Button> */}
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </Card>
  );
};

export default UpdateProfile;
