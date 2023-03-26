import { Link } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit} = useForm({
        email: '',
        password: '',
        confirmPassword: ''
    }, onRegisterSubmit)

    return (
        <form method="POST" id="register" onSubmit={onSubmit}>
            <label htmlFor="eamil">Eamil:</label><br />
            <input type="email" id="email" name="email" placeholder="Enter email" value={values.email} onChange={changeHandler}/><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" id="password" name="password" placeholder="Enter your password" value={values.password} onChange={changeHandler}/><br />
            <label htmlFor="password">Confirm password</label><br />
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" value={values.confirmPassword} onChange={changeHandler}/><br /><br />
            <input type="submit" value="Submit" /><br />
            <p>If you already have a profile, click <Link to="/login">here</Link>.</p>
        </form>
    );
}