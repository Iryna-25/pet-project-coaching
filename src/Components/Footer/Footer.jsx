import React from "react";
import { Paragraf, Item } from "./Footer.styled";

const Footer = ({text, href, link}) => (
    <Paragraf>{text} 
        <span> </span>
        <Item 
            href={href}> 
            {link}
        </Item> 
    </Paragraf>
);

export default Footer;