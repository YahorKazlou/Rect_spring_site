import { useState } from 'react';
import styles from '../App.module.css';
import { Input } from '../components/common/input/Input';
import { useDispatch } from 'react-redux';
import { signup as signupAction } from '../store/user/actions';
import Logo from '../components/Navigation/Logo';

function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const dispatch = useDispatch();

    const onSignup = () => {
        dispatch(
            signupAction({
                username,
                password,
                repeatPassword,
                firstName,
                lastName,
                age,
            })
        );
    };

    return (
        <div className={styles.main}>
            <Logo />
            <h1 className={styles.loginHeader}>Please signup</h1>
            <Input placeholder="Username" onChange={setUsername} />
            <Input
                type="password"
                placeholder="Password"
                onChange={setPassword}
            />
            <Input
                type="password"
                placeholder="Repeat password"
                onChange={setRepeatPassword}
            />
            <Input placeholder="First name" onChange={setFirstName} />
            <Input placeholder="Last name" onChange={setLastName} />
            <Input placeholder="Age" onChange={setAge} />
            <button className={styles.button} onClick={onSignup}>
                Sign Up
            </button>
        </div>
    );
}

export default SignupPage;
