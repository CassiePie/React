import { connect } from 'react-redux';
import Login from '../components/login/Login';
import { login } from '../store/authSlice';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(login(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);