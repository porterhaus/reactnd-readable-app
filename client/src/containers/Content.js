import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const Content = (props) => {
  return (
    <Container style={
      { 
        marginTop: '6em',
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
              <div>
                <h1>
                  Home
                </h1>
              </div>
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
              <div>
                <h1>
                  Posts about { match.params.category }
                </h1>
              </div>
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

export default withRouter(Content);
