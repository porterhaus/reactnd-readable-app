import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  Container,
  Button,
  Header,
  Icon,
  Label,
  Popup,
  Segment
} from 'semantic-ui-react';
import PostStatsActions from './PostStatsActions';

const PostDetails = props => {
  const {
    commentsCount, 
    deletePost,
    post,
    postVote,
  } = props;
  
  return (
    <div>
    <Segment 
      textAlign='center' 
      style={{ 
        // minHeight: 700, 
        padding: '1em 0em 4em' 
      }} 
      vertical
    > 
      <Container text>
        <Header
          as='h1'
          content={post.title}
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '1em',
          }}
        />
        <Header
          as='h2'
          content={`By ${_.capitalize(post.author)}`}
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '0',
          }}
        />
        <PostStatsActions 
          post={post}
          postVote={postVote}
          commentCount={commentsCount}
          deletePost={deletePost}
        />
        {/* <Label.Group size='big'>
          <Label as={Link} tag to={`/${post.category}`} color='grey'>
            {_.capitalize(post.category)}
          </Label>
          <Label>{commentsCount} Comments</Label>
          <Label>{post.voteScore} Votes</Label>
          <Label 
            as='a'
            onClick={
              () => postVote(post.id, 'upVote')
            }
          >
            <Icon name='thumbs up'/>
          </Label>
          <Label 
            as='a'
            onClick={
              () => postVote(post.id, 'downVote')
            }
          >
            <Icon name='thumbs down'/>
          </Label>
          <Label 
            as='a'
            onClick={
              () => console.log('Edit post!')
            }
          >
            <Icon name='write' />
          </Label>
          <Label 
            as='a'
            onClick={this.show}
          >
            <Icon name='remove' />
          </Label>
        </Label.Group> */}
      </Container>
    </Segment>
    <Segment style={{ padding: '1em 0em' }} vertical>
      <Container text>
        <p style={{ fontSize: '1.33em' }}>
          {post.body}
        </p>
      </Container>
    </Segment>
    </div>
  )
}

export default PostDetails;
