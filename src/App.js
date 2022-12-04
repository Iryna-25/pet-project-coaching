import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage'; 
import ForgotPasswordPage from './Pages/ForgotPassword';
import VerifyPage from './Pages/VarifyPage';

import Slider from './Components/Slider/Slider';
import { Container } from './Components/Container/Container.style';
import { SliderContainer } from './Components/Slider/Slider.style';



export default function App() {
  const slides = [
    require('./Images/Image.jpg'),
    require('./Images/Image-2.jpg'),
    require('./Images/Image-3.jpg'),
    require('./Images/Image-4.jpg'),
  ];

  return (
    <Container>
      <Routes>
        <Route path="/signup" 
        element={ 
          <>
            <SignUpPage/>
            <SliderContainer> <Slider slides={slides}/></SliderContainer> 
          </>
          }
        />

        <Route path="*" 
          element={
          <>
            <SliderContainer> <Slider slides={slides}/></SliderContainer> 
            <LoginPage/>
          </>
          }
        />

        <Route path="/forgotpassword" 
          element={
          <>
            <SliderContainer> <Slider slides={slides}/></SliderContainer> 
            <ForgotPasswordPage/>
          </>
          }
        />

        <Route path="/verify" 
          element={
          <>
            <SliderContainer> <Slider slides={slides}/></SliderContainer> 
            <VerifyPage/>
          </>
          }
        />
      </Routes>  
    </Container>
  );
}
