import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../store/slices/authSlice';

export default function Login() {
  
  const dispatch = useDispatch();

  const handleLogin = (credentials) => {
    dispatch(login(credentials));
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm handleSubmit={handleLogin} />
    </div>
  );
};

