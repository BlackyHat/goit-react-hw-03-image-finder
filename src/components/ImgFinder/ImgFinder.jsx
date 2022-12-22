import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';
import * as API from 'services/api';
import PropTypes from 'prop-types';

class ImgFinder extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.page !== page) {
      this.setState({ isLoading: true });
      const imgs = await API.searchImage(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...imgs],
        isLoading: false,
      }));
    }
    if (prevState.query !== query) {
      this.setState({ isLoading: true });
      const imgs = await API.searchImage(query, page);
      this.setState({
        images: imgs,
        isLoading: false,
      });
    }
  }

  handleSubmit = query => {
    this.setState(prevState => {
      return {
        query: query,
        page: 1,
      };
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onLoadMore={this.loadMore} />}
      </>
    );
  }
}

export default ImgFinder;

ImgFinder.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
