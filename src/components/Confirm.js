import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

import * as ApiHelpers from '../ApiHelpers';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    const { values } = this.props;    
    ApiHelpers.registerCustomer(values)
    .then(ApiHelpers.registerAccount(values));
    this.props.nextStep();
  };
  
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values: {username,firstName, lastName, email, birthdate, phone, streetAddress, postalCode } } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm your data" />
          <List>
            <ListItem 
                primaryText="Username"
                secondaryText={ username}
            />
            <ListItem 
                primaryText="First name"
                secondaryText={ firstName}
            />
            <ListItem 
                primaryText="Last name"
                secondaryText={ lastName }
            />
            <ListItem 
                primaryText="Email"
                secondaryText={ email }
            />
            <ListItem 
                primaryText="Date Of Birth"
                secondaryText={ birthdate }
            />
            <ListItem 
                primaryText="Phone"
                secondaryText={ phone }
            />
            <ListItem 
                primaryText="Street Address"
                secondaryText={ streetAddress }
            />
            <ListItem 
                primaryText="Postal Code"
                secondaryText={ postalCode }
            />
          </List>
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;