import React, { useState } from "react";
import { Button, Modal } from "antd";
import { getTodoId } from "../redux/todosSlice";
import { useDispatch, useSelector } from "react-redux";

const Open = ({ item }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (id) => {
    setIsModalOpen(true);
    dispatch(getTodoId(id));
  };

  const filteredItems = useSelector((state) => state.todos.filteredItems);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button style={{ color: "black" }} onClick={() => showModal(item.id)}>
        Git
      </Button>
      <Modal
        title="Kişi"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p> {filteredItems.content} </p>
      </Modal>
    </>
  );
};

export default Open;
