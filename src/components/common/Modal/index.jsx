import React from "react";
import "./index.css";
import CommonTypes from "../../../utils/commonTypes";
import PropTypes from "prop-types";

Modal.defaultProps = {
  bg: "rgba(0,0,0,0.5)",
};

Modal.propTypes = {
  children: CommonTypes.children,
  bg: PropTypes.string,

  showModal: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default function Modal(props) {
  if (props.showModal === false) {
    return null;
  }

  const close = (e) => {
    if (e.target.className !== "modal") return null;
    props.close();
  };

  return (
    <div
      onClick={close}
      className="modal"
      style={{ backgroundColor: props.bg }}
    >
      <div className="modal-center">{props.children}</div>
    </div>
  );
}
