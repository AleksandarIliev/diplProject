import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

export const Login = (
) => {
    const { onLoginSubmit } = useAuthContext;
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <form id="login" method="POST" onSubmit={onSubmit}>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name={LoginFormKeys.Email} value={values[LoginFormKeys.Email]} onChange={changeHandler} placeholder="Your email" /><br />
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name={LoginFormKeys.Password} value={values[LoginFormKeys.Password]} onChange={changeHandler} placeholder="Your password" /><br /><br />
            <input type="submit" value="Submit" /><br />
            <p>If you don't have a profile, click <Link to="/register">here</Link>.</p>
        </form>
    );
}