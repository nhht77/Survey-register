import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class FormUserDetails extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thanks You For Your Submission</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


export default FormUserDetails;