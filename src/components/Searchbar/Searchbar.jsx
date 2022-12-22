import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

const initialValues = {
  query: '',
};

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values['query']);
    resetForm();
  };

  render() {
    return (
      <header className="Searchbar">
        <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
          <Form className="SearchForm">
            <button type="submit" className="SearchFormButton">
              <span className="SearchFormButtonLabel">Search</span>
            </button>
            <Field
              className="SearchFormInput"
              type="text"
              autoComplete="off"
              autoFocus
              name="query"
              placeholder="Search images and photos"
            />
          </Form>
        </Formik>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
