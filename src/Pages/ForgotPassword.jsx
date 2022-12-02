import React from "react";

import { Wrapper } from "../Components/Wrapper/Wrapper.style";

import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import ButtonGoogle from "../Components/ButtonGoogle/ButtonGoogle";
import Footer from "../Components/Footer/Footer";


const ForgotPasswordPage = () => {
    return (
        <Wrapper>
            <Header
            title="Forgot Your Password?"
            subtitle="Please confirm your email address below and we will
            send you a verification code."
            />
            <Input
                type="text"
                placeholder="Email"
            />

            <Button
                text="Continue"
            />
            <ButtonGoogle
                text="Login with Google"
            />
            <Footer
               text="Already have an account ? "
               href="/login"
               link="Log in"
            />
        </Wrapper>
    )
}

export default ForgotPasswordPage;