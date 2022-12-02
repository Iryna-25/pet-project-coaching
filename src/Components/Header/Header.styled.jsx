import styled from "styled-components";

export const Title = styled.h1 `
    font-family: ${p => p.theme.fonts};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.l};
    
    margin-top: 96px;
`

export const Subtitle = styled.h3 `
    font-family: ${p => p.theme.fonts};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.s};
    
    margin-top: 14px;
    margin-bottom: 86px;
`