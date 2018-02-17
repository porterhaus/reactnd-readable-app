import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import { fetchCategories } from '../actions/categories_actions';
import SubMenu from './SubMenu';

class Header extends Component {
  componentDidMount () {
    this.props.fetchCategories();
  }

  render () {
    const { categories } = this.props;
    return (
      <div>
        <MainMenu />
        <SubMenu categories={categories} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, { fetchCategories }, null, { pure: false })(Header);
