import React from "react";

import { Wrapper } from "../Components/Wrapper/Wrapper.style";

import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import ButtonGoogle from "../Components/ButtonGoogle/ButtonGoogle";
import Footer from "../Components/Footer/Footer";
import Link from "../Components/Link/Link";


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

            <Link
                href="/forgotpassword"
                link="Forgot password ?" 
            />

            <Button
                text="Login"
            />
            <ButtonGoogle
                text="Login with Google"
            />
            <Footer
               text="Don't have an account? "
               href="/signup"
               link="Sign up" 
            />
        </Wrapper>
    )
}

export default LoginPage;