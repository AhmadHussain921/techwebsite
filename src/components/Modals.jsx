import Modal from "react-bootstrap/Modal";
import { Wrapper } from "./Layouts";
import close from "../assets/close.svg";
import { PrimaryBtn } from "./Buttons";
const ModalComp = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Wrapper bg="#000" color="white">
        <Modal.Header className="d-flex flex-row justify-content-between align-items-center">
          <Modal.Title id="contained-modal-title-vcenter">
            <Wrapper weight="700" size="31px">
              {props.heading}
            </Wrapper>
          </Modal.Title>
          <Wrapper
            style={{ cursor: "pointer" }}
            onClick={() => {
              props.setOpen(false);
            }}
          >
            <img
              width="25px"
              height="25px"
              src={close}
              alt="close"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Wrapper>
        </Modal.Header>
        <Modal.Body>
          <Wrapper>{props.children}</Wrapper>
        </Modal.Body>
        <Modal.Footer>
          <PrimaryBtn
            data-aos="zoom-in"
            hoverBg="transparent"
            // hoverTransform="scale(1.1)"
            bg="#16a092"
            className="btn btn-simision text-white ps-4 pt-1 pb-1 pe-4 fw-bold"
            style={{ border: "1px solid #16a092", fontSize: "21px" }}
          >
            Submit
          </PrimaryBtn>
          <PrimaryBtn
            onClick={() => {
              props.setOpen(false);
            }}
            className="rounded btn text-white fs-5 fw-bold"
          >
            Close
          </PrimaryBtn>
        </Modal.Footer>
      </Wrapper>
    </Modal>
  );
};
export default ModalComp;