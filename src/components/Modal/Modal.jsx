import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlerEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerEscape);
  }
  handlerEscape = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { alt, src } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;

Modal.propTypes = {
  handleBackdropClick: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
