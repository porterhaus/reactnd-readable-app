import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import { Container } from 'semantic-ui-react';
import PostsList from './PostsList';

import { fetchPosts } from '../actions/posts_actions';

class Content extends Component {
  componentDidMount () {
    this.props.fetchPosts();
  }

  render () {
    const {
      posts,
      sortPostsBy
    } = this.props;
    
    const orderPosts = _.sortBy(posts, sortPostsBy).reverse();
    
    return (
      <Container style={
        { 
          marginTop: '3em',
          marginBottom: '3em', 
          paddingLeft: '1.5em', 
          paddingRight: '1.5em' 
        }
      }>
        <Switch>
          <Route exact
            path='/'
            render={
              () => (
                <PostsList posts={orderPosts} />
              )
            }
          />
          <Route exact
            path='/posts/new'
            render={
              () => (
                <div>
                  <h1>
                    New Post
                  </h1>
                </div>
              )
            }
          />
          <Route exact 
            path='/:category'
            render={
              ({ match }) => (
                <PostsList posts={
                _.filter(
                  orderPosts, 
                  post => post.category === match.params.category
                )
                } />
              )
            }
          />
          <Route exact
            path='/:category/:post_id'
            render={
              ({ match }) => (
                <div>
                  <h1>
                    Post Detail about { match.params.category }/{ match.params.post_id }
                  </h1>
                </div>
              )
            }
          />
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: _.filter(state.posts, post => !post.deleted),
    sortPostsBy: state.sortPostsBy 
  }
}

export default withRouter(
  connect(mapStateToProps, { fetchPosts })(Content)
);
