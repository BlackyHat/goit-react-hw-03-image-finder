// import Loader from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';

// const PIXABAY_API_KEY = '30842205-cd6932c3783f22601a373589f';

class ImgFinder extends Component {
  state: {
    images: ['1'],
  };

  handleSubmit = result => {
    this.setState(prevState => {
      console.log(this.state);
      return {
        images: result,
      };
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {/* <Loader /> */}
      </>
    );
  }
}

export default ImgFinder;
