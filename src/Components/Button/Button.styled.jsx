import styled from "styled-components";

export const ButtonStyle = styled.button `
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.background};
    
    display: flex;
    width: 419px;
    height: 59px;
    padding: 21px;
    margin: 15px 0px;
    border: 1px solid;
    border-radius: 6px;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover { 
        background-color: ${p => p.theme.colors.hoverButton};
    }
`