import { useState } from 'react';
import styles from '../App.module.css';
import { Input } from '../components/common/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { signup as signupAction } from '../store/user/actions';
import Logo from '../components/Navigation/Logo';

function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const { loading, error } = useSelector((state) => state.user.signup);

    const dispatch = useDispatch();

    const onSignup = () => {
        dispatch(
            signupAction({
                username,
                password,
                repeatPassword,
                firstName,
                lastName,
                age: Number(age),
            })
        );
    };

    return (
        <div className={styles.main}>
            <Logo />
            <h1 className={styles.loginHeader}>Please signup</h1>
            <Input
                placeholder="Username"
                onChange={setUsername}
                errorMsg={error?.field === 'username' && error.error}
            />
            <Input
                type="password"
                placeholder="Password"
                onChange={setPassword}
                errorMsg={error?.field === 'password' && error.error}
            />
            <Input
                type="password"
                placeholder="Repeat password"
                onChange={setRepeatPassword}
                errorMsg={error?.field === 'repeatPassword' && error.error}
            />
            <Input
                placeholder="First name"
                onChange={setFirstName}
                errorMsg={error?.field === 'firstName' && error.error}
            />
            <Input
                placeholder="Last name"
                onChange={setLastName}
                errorMsg={error?.field === 'lastName' && error.error}
            />
            <Input
                type="number"
                placeholder="Age"
                onChange={setAge}
                errorMsg={error?.field === 'age' && error.error}
            />
            <button className={styles.button} onClick={onSignup}>
                {loading ? 'Loading...' : 'Sign Up'}
            </button>
        </div>
    );
}

export default SignupPage;
