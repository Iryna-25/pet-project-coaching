import React from "react";

import { Wrapper } from "../Components/Wrapper/Wrapper.style";

import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import ButtonGoogle from "../Components/ButtonGoogle/ButtonGoogle";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";



const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);

    useEffect(()=> {
        for (const validation in validations) {
            switch(validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
            }
        }

    }, [value])

    return {
        isEmpty,
        minLengthError,
    }

}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}


const SignUpPage = () => {
    const email = useInput ('', {isEmpty: true, minLength: 3});
    const password = useInput ('', {isEmpty: true, minLength: 5});
    


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
            {(email.isDirty && email.isEmpty) && <div style={{color:'red'}}>This input field can't be empty</div>}
            {(email.isDirty && email.minLengthError) && <div style={{color:'red'}}>This input field can't be this length</div>}

            <Input
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                value={email.value}
                type="text"
                placeholder="Email"
            />

            {(email.isDirty && email.isEmpty) && <div style={{color:'red'}}>This input field can't be empty</div>}
            {(email.isDirty && email.minLengthError) && <div style={{color:'red'}}>This input field can't be this length</div>}

            <Input
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
                value={password.value}
                type="password"
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
            to="/login"
            link="Log in"
            />  
        </Wrapper>
    );
}

export default SignUpPage;