import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children, 
}) => {
    const [auth, setAuth] = useLocalStorage("auth", {})
    const navigate = useNavigate();
    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService(data);
            setAuth(result);
            navigate('/catalog');
        } catch (error) {
            console.log(error);
            console.log('There is a problem!!!');
        }
    }
    
    const onRegisterSubmit = async (values) => {
        const {confirmPassword, ...registerData} = values;
        if (confirmPassword !== registerData.password) {
            return;
        }
        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/catalog');
        } catch (error) {
            console.log(error);
            console.log('There is a problem!!!');
        }
    }

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._ownerId,
        token: auth.accessToken,
        email: auth.email,
        isAuthenticated: !!auth.accessToken
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    const context = useContext(AuthProvider);

    return context;
}