import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import { Container } from 'semantic-ui-react';
import PostsList from './PostsList';
import PostContainer from './PostContainer';
import NoRouteMatch from './NoRouteMatch';

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
      categories,
      posts,
      sortPostsBy,
      postVote,
      deletePost
    } = this.props;
    
    const orderedPosts = _.sortBy(posts, sortPostsBy).reverse();
    
    return (
      <Container style={
        { 
          marginBottom: '5em', 
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
            path='/:category'
            render={
              ({ match }) => (
                _.find(categories, {name: match.params.category}) ? (
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
                  :
                  (
                    <NoRouteMatch />
                  )
              )
            }
          />
          <Route exact
            path='/:category/:post_id'
            render={
              ({match}) => (
                _.find(orderedPosts,{id: match.params.post_id}) ? (
                  <PostContainer match={match}/>
                )
                :
                (
                  <NoRouteMatch />
                )
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
    categories: state.categories,
    sortPostsBy: state.sortPostsBy 
  }
}

export default withRouter(
  connect(
    mapStateToProps, 
    { 
      fetchPosts, 
      postVote,
      deletePost 
    }
  )(ContentContainer)
);
