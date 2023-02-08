import { useMutation } from "@tanstack/react-query";
import { log } from "console";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/Auth/login";
import Input from "../../components/UIElements/Input"
import PasswordInput from "../../components/UIElements/PasswordInput/PasswordInput";
import { setToken } from "../../helpers";
import { setUser } from "../../store/auth/slice";
import { useAppDispatch } from "../../store/hooks";

interface Login {
    email?: string,
    password?: string
}

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState<Login>({})

    const { mutate, isLoading } = useMutation(loginUser, {
        onSuccess(data) {
            console.log(data);
            let {token, ...user} = data;
            dispatch(setUser(user))
            setToken(token)
            navigate("/profile");
        },
        onError(error: any) {
            console.log(error)
        },
    })

    const onChangeHandler = (e: any) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        mutate(login)
    }

    return (
        <div className="login">
            <div className="auth__title">Login</div>
            <form onSubmit={onSubmitHandler}>
                <label className="input__label u-margin-bottom-small" htmlFor="email">E-mail</label>
                <div className="auth__input u-margin-bottom-big">
                    <Input required type="email" name="email" onChange={onChangeHandler} value={login.email} />
                </div>
                <label className="input__label u-margin-bottom-small" htmlFor="password">Password</label>
                <div className="auth__input auth__input u-margin-bottom-huge">
                    <PasswordInput required name="password" onChange={onChangeHandler} value={login.password} />
                </div>
                <div className="auth__button">
                    <button className="button button__primary" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login