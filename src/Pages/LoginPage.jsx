import React from "react";
import { NavLink } from "react-router-dom";

import { Wrapper } from "../Components/Wrapper/Wrapper.style";
import { LinkStyle } from "../Components/Link/Link.styled";

import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import ButtonGoogle from "../Components/ButtonGoogle/ButtonGoogle";
import Footer from "../Components/Footer/Footer";

const LoginPage = () => {
    return (
        <Wrapper>
            <Header
            title="Login"
            subtitle="Welcome back Please enter your details ."
            />
            <Input
                type="text"
                placeholder="Name"
            />
            <Input
                type="text"
                placeholder="Password"
            />
            <LinkStyle>
                <NavLink to="/forgotpassword">Forgot password ?</NavLink>
            </LinkStyle>
            <Button
                text="Login"
            />
            <ButtonGoogle
                text="Login with Google"
            />
            <Footer
               text="Don't have an account? "
               to="/signup"
               link="Sign up" 
            /> 
        </Wrapper>
    )
}

export default LoginPage;