import React from "react";

import { Wrapper } from "../Components/Wrapper/Wrapper.style";

import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";


const VerifyPage = () => {
    return (
        <Wrapper>
            <Header
                title="Verify Code"
                subtitle="Code is sent to nickname@mail.com"
            />

            <Button
                text="Verify"
            />

            <Footer
               text="Already have an account ? "
               href="/login"
               link="Log in"
            />
        </Wrapper>
    )
}

export default VerifyPage;