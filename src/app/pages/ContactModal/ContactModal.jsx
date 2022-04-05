import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeContactModal } from "../../../redux/actions/modal";
import { Modal } from "antd";
import "antd/dist/antd.min.css";
import "alertifyjs/build/css/alertify.min.css";
import alertify from "alertifyjs";
import Select from "react-select";

// ** Third Party Components
import { useForm, Controller } from "react-hook-form";

// ** Custom Components

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Form,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

const ContactModal = () => {
  const dispatch = useDispatch();

  const changeContactModalVisible = useSelector(
    (state) => state.ModalReducer.changeContactModal.val
  );
  // console.log(changeContactModalVisible);
  const handleCancel = () => {
    dispatch(changeContactModal(!changeContactModalVisible));
  };
  useEffect(() => {
    // dispatch(changeContactModal());
  }, []);

  const handleOk = () => {
    alertify.success("Success message");
  };
  
  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  
  };

  const handleReset = () => {
    
    reset({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    });
  };

  return (
    <Modal
      title="Basic Modal"
      visible={changeContactModalVisible}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      {" "}
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Validation Schema With OnChange</CardTitle>
        </CardHeader>
        <CardBody>
          <Form className="update-user-info" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-1">
              <Controller
              id="select"
                name="select"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={[
                      { value: "chocolate", label: "Chocolate" },
                      { value: "strawberry", label: "Strawberry" },
                      { value: "vanilla", label: "Vanilla" },
                    ]}
                  />
                )}
              />
            </div>
            <div className="mb-1">
              <Label className="form-label" for="firstName">
                First Name
              </Label>
              <Controller
                id="firstName"
                name="firstName"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Bruce"
                    invalid={errors.firstName && true}
                  />
                )}
              />
              {errors.firstName && (
                <FormFeedback>{errors.firstName.message}</FormFeedback>
              )}
            </div>
            <div className="mb-1">
              <Label className="form-label" for="lastName">
                Last Name
              </Label>
              <Controller
                id="lastName"
                name="lastName"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Wayne"
                    invalid={errors.lastName && true}
                  />
                )}
              />
              {errors.lastName && (
                <FormFeedback>{errors.lastName.message}</FormFeedback>
              )}
            </div>
            <div className="mb-1">
              <Label className="form-label" for="email">
                Email
              </Label>
              <Controller
                id="email"
                name="email"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="bruce.wayne@email.com"
                    invalid={errors.email && true}
                  />
                )}
              />
              {errors.email && (
                <FormFeedback>{errors.email.message}</FormFeedback>
              )}
            </div>
            <div className="mb-1">
              <Label className="form-label" for="password">
                Password
              </Label>
              <Controller
                id="password"
                name="password"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    placeholder="Password"
                    invalid={errors.password && true}
                  />
                )}
              />
              {errors.password && (
                <FormFeedback>{errors.password.message}</FormFeedback>
              )}
            </div>
            <div className="d-flex">
              <Button className="me-1" color="primary" type="submit">
                Submit
              </Button>
              <Button
                outline
                color="secondary"
                type="reset"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Modal>
  );
};

export default ContactModal;
