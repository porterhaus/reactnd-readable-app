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

  toggleModal = () => this.setState({ newPostModalOpen: !this.state.newPostModalOpen });

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
                onClick={this.toggleModal}
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
          onClose={this.toggleModal}
          history={this.props.history}
        />
      </div>
    )
  }
} 

export default MainMenu;
