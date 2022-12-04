import styled from "styled-components";

export const LinkStyle = styled.a`
    a:link {
        font-family: ${p => p.theme.fonts};
        font-weight: ${p => p.theme.fontWeights.normal};
        font-size: ${p => p.theme.fontSizes.m};
        color: ${p => p.theme.colors.link};
        
        display: flex;
        text-decoration: none;
        text-align: center;
        justify-content: right;
        text-decoration: none;
    }
    
    a:visited {
        color: ${p => p.theme.colors.link};
    }
`