import React, { useState } from "react";
// import { Button } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormContainer from "../../DynamicPopup/FormContainer";

function AddingLookupParameter({
  value,
  enable,
  title,
  fieldName,
  type,
  ...props
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => {}}>AddingLookupParameter</Button>
      <Modal isOpen={modalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>
          {/* {localization.browser.modal.header} */}
          header
        </ModalHeader>
        <ModalBody>
          <FormContainer />
        </ModalBody>
        <ModalFooter>
          <Button
            className={browserActionsStyle.modalButton}
            onClick={this.toggleModal}
          >
            {localization.browser.modal.button.cancel}
          </Button>
          <Button
            onClick={this.fetchImage}
            className={browserActionsStyle.modalFooterButton}
            name={this.props.fieldName}
            disabled={!!error || !imageUrl}
          >
            {localization.browser.modal.button.fetch}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddingLookupParameter;
