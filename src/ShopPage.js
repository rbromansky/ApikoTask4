import React, { Fragment, useState } from "react";
import { Button } from "./component/Button";
import { ModalProvider, Modal } from "./component/Modal";
import { useHistory } from "react-router";
import { routes } from "./routes";

export const ShopPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const closeModal = () => {
    setIsModalOpen(false);
    history.push(routes.HOME);
  };

  return (
    <Fragment>
      <div>Welcome to Shop.</div>
      <ModalProvider>
        <Button onClick={() => setIsModalOpen(true)}>Purchase</Button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <p>There is no products now</p>
          </Modal>
        )}
      </ModalProvider>
    </Fragment>
  );
};
