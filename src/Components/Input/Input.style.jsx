import styled from "styled-components";

export const InputStyle = styled.input `
    font-size: ${p => p.theme.fontSizes.m};
    border-color: ${p => p.theme.colors.white};

    display: flex;
    width: 367px;
    height: 17px;
    padding: 21px 25px;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid;
    border-radius: 6px;
    
    
    -webkit-box-shadow: 19px 12px 59px 29px rgba(170, 170, 170, 0.2); 
    -moz-box-shadow: 19px 12px 59px 29px rgba(170, 170, 170, 0.2); 
    box-shadow: 19px 12px 59px 29px rgba(170, 170, 170, 0.2);
`