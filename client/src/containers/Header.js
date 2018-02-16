import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Icon,
  Menu
} from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu fixed='top' size='massive' borderless>
      <Container>
        <Menu.Item header>
          Readable
        </Menu.Item>
        <Menu.Item position='right'>
          <Button icon 
            labelPosition='left'
            as={Link}
            to='/posts/new'
          >
            <Icon name='add'/>
            New Post
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Header;
