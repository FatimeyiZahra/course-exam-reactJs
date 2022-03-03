import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeContactModal } from "../../../redux/actions/modal";
import { Modal, Button } from "antd";
import "antd/dist/antd.min.css";
import "alertifyjs/build/css/alertify.min.css";
import alertify from "alertifyjs";

const ContactModal = () => {
  const dispatch = useDispatch();

  const changeContactModalVisible = useSelector(
    (state) => state.ModalReducer.changeContactModal.val
  );
    console.log(changeContactModalVisible)
  const handleCancel = () => {
    dispatch(changeContactModal(false));
  };
  useEffect(() => {
    // dispatch(changeContactModal());
  }, []);
  
  const handleOk = () => {
    alertify.success('Success message');
  };

  return (
    <Modal
      title="Basic Modal"
      visible={changeContactModalVisible}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default ContactModal;
