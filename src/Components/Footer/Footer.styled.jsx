import styled from "styled-components";

export const Paragraf = styled.p `
    font-family: ${p => p.theme.fonts};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.black};
    
    margin-top: 74px;
    margin-bottom: 72px;
    text-align: center;
    justify-content: center;
`

export const Item = styled.a `
    a:link {
        font-weight: ${p => p.theme.fontWeights.bold};
        font-size: ${p => p.theme.fontSizes.m};
        color: ${p => p.theme.colors.black};
        
        margin-top: 74px;
        margin-bottom: 72px;
        text-decoration: none;
        text-align: center;
        justify-content: center;
    }
    
    a:visited {
        color: ${p => p.theme.colors.black};;
    }
`