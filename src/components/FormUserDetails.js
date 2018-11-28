import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


export class FormUserDetails extends Component {
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
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <InputLabel
          id="standard-name"
          children="Type"
          name="ans1"
          margin="dense"
          style={styles.InputLabel}
          variant="filled"
          />
        <br/>
          <FormControl style={styles.RadioAnswer} component="fieldset">
            <RadioGroup
              aria-label="position"
              name="position"
              value={values.type}
              onChange={handleChange('type')}
              row
            >
          <FormControlLabel
                value={"Customer"}
                control={<Radio color="primary" />}
                label={"Customer"}
                labelPlacement="top"
            />
          <FormControlLabel
                value={"Company"}
                control={<Radio color="primary" />}
                label={"Company"}
                labelPlacement="top"
            />
            </RadioGroup>
      </FormControl>
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
  },
};

export default FormUserDetails;