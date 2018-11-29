import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FormControl from '@material-ui/core/FormControl';
import RaisedButton from 'material-ui/RaisedButton';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


export class FormUserDetails extends Component {
    state = {
        showPassword: false,
        isMatch: true,
        password:''
      };  
    
  continue = e => {
    e.preventDefault();
    if(this.props.values.passwordConfirm !== this.props.values.password){
      console.log('Password does not match!')
      this.setState({isMatch: false})
    }else{
      this.props.nextStep();
    }
    
  };

  handlePasswordMatch = (password, passwordConfirm) => {
    if( password !== passwordConfirm){
      console.log('Password does not match!')
      this.setState({isMatch:false})
    }
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handlePaswordChange = e => {
    this.setState({password: e.target.values})
  }

  render() {
    const {isMatch, showPassword } = this.state;
    const { values, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Create your Account" />
          <TextField
            hintText="Enter Your Username"
            floatingLabelText="Username"
            onChange={handleChange('username')}
            defaultValue={values.username}
          />
          <br />
          
          <FormControl error={isMatch ? false : true} style={styles.Input}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            type={showPassword ? 'text' : 'password'}
            defaultValue={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {isMatch ? null : <FormHelperText id="component-error-text">Password is not Match</FormHelperText> }
          </FormControl>
          <br />

          <FormControl error={isMatch ? false : true} style={styles.Input}>
          <InputLabel htmlFor="adornment-password">Confirm Your Password</InputLabel>
          <Input
            type='password'
            defaultValue={values.passwordConfirm}
            onChange={handleChange('passwordConfirm')}
          />
          {isMatch ? null : <FormHelperText id="component-error-text">Password is not Match</FormHelperText> }
          </FormControl>
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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
  Input:{
    width: 256,
    margin:25
  }
};

export default FormUserDetails;