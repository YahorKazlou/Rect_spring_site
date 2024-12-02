import { useState } from 'react';
import styles from './LoginPage.module.css';
import { Input } from '../components/common/input/Input';
import { Button } from '../components/common/button/button';
import { useDispatch } from 'react-redux';
import { login as loginAction } from '../store/user/actions';
import Logo from '../components/Navigation/Logo';

function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(loginAction(login, password));
    };

    return (
        <div className={styles.main}>
            <Logo />
            <h1 className={styles.loginHeader}>Please login</h1>
            <Input placeholder="Login" onChange={setLogin} />
            <Input
                type="password"
                placeholder="Password"
                onChange={setPassword}
            />
            <Button onClick={onLogin}>Login</Button>
        </div>
    );
}

export default LoginPage;
