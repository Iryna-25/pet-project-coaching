import styled from "styled-components";

export const ButtonGoogleStyle = styled.button `
    font-size: ${p => p.theme.fontSizes.m};
    background-color: ${p => p.theme.colors.white};

    display: flex;
    width: 419px;
    height: 59px;
    padding: 15px;
    margin: 15px 0px;
    border: 3px solid;
    border-radius: 6px;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover { 
        border-color: ${p => p.theme.colors.borderButton};
    }
`

export const GoogleSvg = styled.div `
    display: flex;
    width: 25px;
    height: 25px;
    padding-right: 10px;
    text-align: center;
    justify-content: center;
`