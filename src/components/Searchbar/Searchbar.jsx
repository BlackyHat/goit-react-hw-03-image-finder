import React, { Component } from 'react';
import axios from 'axios';
const URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '30842205-cd6932c3783f22601a373589f';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
export const PER_PAGE = 12;

class Searchbar extends Component {
  state = {
    query: '11',
    page: 1,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
    console.log(this.state.query);
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit({ id: nanoid(), ...this.state });
    this.searchImgs();
  };

  formReset = () => {
    this.setState({ name: '' });
  };

  async searchImgs() {
    try {
      const searchParams = new URLSearchParams({
        key: PIXABAY_API_KEY,
        image_type: IMAGE_TYPE,
        orientation: ORIENTATION,
        safesearch: SAFESEARCH,
        per_page: PER_PAGE,
        page: this.state.page,
        q: this.state.query,
      });

      const url = `${URL}?${searchParams}`;
      const response = await axios.get(url);
      if (!response.status) {
        throw new Error('Something goes wrong');
      }
      return this.props.onSubmit(response.data.hits);
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="buttonLabel">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
