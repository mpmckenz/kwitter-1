import React, { Component } from 'react';
import { Header,
  Container,
  Sticky,
  Modal,
  Button,
  Grid,
  Card,
  Divider
}  from 'semantic-ui-react';
import { connect } from 'react-redux';

class Newsfeed extends React.Component {
    render () {
        return (
            <div className="newsfeed">
      <Header className='header' as='h3'>
              Tweets
            </Header>
            <Container fluid>

          
          <Container style={{ marginTop: '2vh' }}>
            <Grid centered>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Container className="tweet">
                  </Container>

                  
                </Grid.Column>

                
              </Grid.Row>
            </Grid>
          </Container>
      </Container>
     
        </div>
        
        )
    }
}

export default Newsfeed