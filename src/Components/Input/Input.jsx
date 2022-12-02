import React from "react";
import { InputStyle } from "./Input.style";

const Input = ({type, placeholder}) => (
    <InputStyle
    type={type} 
    placeholder={placeholder}
    />
);

export default Input;