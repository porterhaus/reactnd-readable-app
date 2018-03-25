import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Modal
} from 'semantic-ui-react';
import PostFormModal from './PostFormModal';

class MainMenu extends Component {
  state = {
    newPostModalOpen: false
  }

  handleOpen = () => this.setState({ newPostModalOpen: true });
  handleClose = () => this.setState({ newPostModalOpen: false });

  render () {
    return (
      <div>
        <Menu size='massive' borderless>
          <Container>
            <Menu.Item header>
              Readable
            </Menu.Item>
            <Menu.Item position='right'>
              <Button icon 
                labelPosition='left'
                // as={Link}
                // to='/posts/new'
                onClick={this.handleOpen}
              >
                <Icon name='add'/>
                New Post
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
        <PostFormModal
          form={'PostForm_New'}
          createPost={this.props.createPost}
          open={this.state.newPostModalOpen}
          onClose={this.handleClose}
          history={this.props.history}
        />
      </div>
    )
  }
} 

export default MainMenu;
