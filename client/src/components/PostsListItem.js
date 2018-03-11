import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { 
  Confirm,
  Header,
  Icon,  
  Label, 
  Popup,
  Segment
} from 'semantic-ui-react';
import '../styles/PostListItem.css';
import PostStatsActions from './PostStatsActions';
import { formatDate } from '../utils';
import { fetchPostCommentsCount } from '../actions/posts_actions';

class PostsListItem extends Component {
  state = {
    commentCount: 0
  }

  componentWillMount () {
    this.props.fetchPostCommentsCount(this.props.post.id, (data) => {
      this.setState({ commentCount: data.count });
    })
  }

  render () {
    const { 
      post, 
      postVote,
      deletePost
    } = this.props;
  
    return (
      <Segment vertical>
        <Header size='huge'>
          <Link to={`/${post.category}/${post.id}`}>
            {post.title}
          </Link>
          <Header.Subheader>
            {post.body}
          </Header.Subheader>
          <Header.Subheader>
            <small>
              Posted by <em><strong>{_.capitalize(post.author)}</strong></em> on {formatDate(post.timestamp)}
            </small>
          </Header.Subheader>
        </Header>
        
        <PostStatsActions 
          post={post}
          postVote={postVote}
          commentCount={this.state.commentCount}
          deletePost={deletePost}
        />
      </Segment>
    )
  }
}

export default connect(undefined, { fetchPostCommentsCount })(PostsListItem);
