import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter Your Birthdate"
            floatingLabelText="Birthdate"
            onChange={handleChange('birthdate')}
            defaultValue={values.birthdate}
          />
          <br />
          <TextField
            hintText="Enter Your phone"
            floatingLabelText="Phone"
            onChange={handleChange('phone')}
            defaultValue={values.phone}
          />
          <br />
          <TextField
            hintText="Enter Your street Address"
            floatingLabelText="Street Address"
            onChange={handleChange('streetAddress')}
            defaultValue={values.streetAddress}
          />
          <br />
          <br />
          <TextField
            hintText="Enter Your postal Code"
            floatingLabelText="Postal Code"
            onChange={handleChange('postalCode')}
            defaultValue={values.postalCode}
          />
          <br />
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

export default FormPersonalDetails;