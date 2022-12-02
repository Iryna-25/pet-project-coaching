import React from "react";

import { Wrapper } from "../Components/Wrapper/Wrapper.style";

import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import ButtonGoogle from "../Components/ButtonGoogle/ButtonGoogle";
import Footer from "../Components/Footer/Footer";


const SignUpPage = () => {
    return (
        <Wrapper>
            <Header
            title="Create an account"
            subtitle="Let's get started with your 30 day free trial."
            />
            <Input
                type="text"
                placeholder="Name"
            />
            <Input
                type="text"
                placeholder="Email"
            />
            <Input
                type="text"
                placeholder="Password"
            />
            <Button
                text="Create account"
            />
            <ButtonGoogle
                text="Sign up with Google"
            />
            <Footer
               text="Already have an account ?"
               href="/login"
               link="Log in"
            />
        </Wrapper>
    )
}

export default SignUpPage;