import React from "react";
import { ButtonGoogleStyle } from "./ButtonGoogle.styled";
import Svg from "../../Images/svg/Google-logo.svg";
import { GoogleSvg } from "./GoogleSvg.style";

const ButtonGoogle = ({text}) => (
    <ButtonGoogleStyle>
        <GoogleSvg>
            <img src={Svg} alt="Google-logo" />
        </GoogleSvg>
        {text}
    </ButtonGoogleStyle>
);
export default ButtonGoogle;