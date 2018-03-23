import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories_actions';
import { sortPostsBy } from '../actions/posts_actions';
// New Post success action pass to main menu
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';
import { Button, Icon, Modal } from 'semantic-ui-react';

class Header extends Component {
  componentDidMount () {
    this.props.fetchCategories();
  }

  render () {
    const { 
      categories,
      sortPostsByValue,
      sortPostsBy
    } = this.props;
    
    return (
      <div>
        <MainMenu/>
        <SubMenu 
          categories={categories}
          sortPostsBy={sortPostsBy} 
          sortPostsByValue={sortPostsByValue}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    sortPostsByValue: state.sortPostsBy
  }
}

export default connect(
  mapStateToProps, 
  { 
    fetchCategories,
    sortPostsBy
  }, 
  null, 
  { 
    pure: false
  }
)(Header);
