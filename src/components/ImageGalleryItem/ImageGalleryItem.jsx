import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    bigUrl: '1',
    tag: '2',
  };

  getImage = e => {
    this.setState(({ bigUrl }) => ({
      bigUrl: e.target.dataset.largeimg,
    }));
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, bigUrl, tag } = this.state;

    return (
      <>
        {this.props.images.map(image => (
          <li className="ImageGalleryItem" key={image.id}>
            <img
              src={image.webformatURL}
              data-largeimg={image.largeImageURL}
              alt={image.tags}
              className="ImageGalleryItemImage"
              onClick={this.getImage}
              loading="lazy"
            />
          </li>
        ))}
        {showModal && (
          <Modal src={bigUrl} alt={tag} toggleModal={this.toggleModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
