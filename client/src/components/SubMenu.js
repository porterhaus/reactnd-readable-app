import _ from 'lodash';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Container, 
  Menu, 
  Select 
} from 'semantic-ui-react';

const SubMenu = (props) => {
  const options = [
    {key: 'Votescore', value: 'voteScore', text: 'Vote Score'},
    {key: 'Timestamp', value: 'timestamp', text: 'Timestamp'}
  ];

  return (
    <Menu secondary>
      <Container
      style={
        { 
          paddingRight: '1.5em' 
        }
      }>
        <Menu.Item header>
        Categories
        </Menu.Item>
        <Menu.Item 
          as={NavLink}
          to='/' 
          exact
          key={'all'} 
          name='all' 
        >
          All 
        </Menu.Item>
        {
          _.map(props.categories, category => (
            <Menu.Item 
              as={NavLink} 
              to={`/${category.path}`} 
              key={`${category.name}`}
              name={`${category.name}`}
            >
              {_.capitalize(category.name)}
            </Menu.Item>
          ))
        }
        <Menu.Menu position='right'>
          <Menu.Item header>
            Sort By
          </Menu.Item>
          <Select options={options} />
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default SubMenu;
