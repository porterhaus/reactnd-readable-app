import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories_actions';
import { createPost, sortPostsBy } from '../actions/posts_actions';
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
      createPost,
      sortPostsByValue,
      sortPostsBy
    } = this.props;
    
    return (
      <div>
        <MainMenu
          createPost={createPost}
        />
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
    createPost,
    fetchCategories,
    sortPostsBy
  }, 
  null, 
  { 
    pure: false
  }
)(Header);
