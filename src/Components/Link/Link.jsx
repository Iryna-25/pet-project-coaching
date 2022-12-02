import React from "react";
import { LinkStyle } from "./Link.styled";

const Link = ({href, link}) => (
    <LinkStyle              
    href={href}>
    {link} 
    </LinkStyle>
);

export default Link;
