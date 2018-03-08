import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import { Container } from 'semantic-ui-react';
import PostsList from './PostsList';
import PostContainer from './PostContainer';

import {
  fetchPosts, 
  postVote,
  deletePost
} from '../actions/posts_actions';

class ContentContainer extends Component {
  componentDidMount () {
    this.props.fetchPosts();
  }

  render () {
    const {
      posts,
      sortPostsBy,
      postVote,
      deletePost
    } = this.props;
    
    const orderedPosts = _.sortBy(posts, sortPostsBy).reverse();
    
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
                <PostsList 
                  posts={orderedPosts}
                  postVote={postVote}
                  deletePost={deletePost} 
                />
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
                <PostsList 
                  posts={
                    _.filter(
                      orderedPosts, 
                      post => post.category === match.params.category
                    )
                  }
                  postVote={postVote}
                  deletePost={deletePost}
                />
              )
            }
          />
          <Route exact
            path='/:category/:post_id'
            component={PostContainer}
            // render={
            //   ({ match }) => (
            //     <Post post={
            //       _.find(
            //         orderedPosts,
            //         post => post.id === match.params.post_id
            //       )
            //     }
                />
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
  connect(
    mapStateToProps, 
    { 
      fetchPosts , 
      postVote,
      deletePost 
    }
  )(ContentContainer)
);
