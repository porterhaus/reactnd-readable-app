import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Icon
} from 'semantic-ui-react';

const NoRouteMatch = () => (
  <Header textAlign='center'>
    <h1>404</h1>
    <Header.Subheader>
      Uhh, something went wrong... Head back this <Link to='/'>way</Link>.
    </Header.Subheader>
  </Header>
)

export default NoRouteMatch;
