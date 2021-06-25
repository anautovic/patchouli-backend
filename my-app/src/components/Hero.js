import React, {useEffect, useState, useRef} from 'react'
import styled, {css} from 'styled-components/macro'
import { Button } from './Button';
import {IoMdArrowRoundForward}from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import ImageOne from '../images/rasta_realisation1.jpg';
import ImageTwo from '../images/bar_makeup.jpg';
import ImageThree from '../images/realisation2.jpg'
import ImageFour from '../images/hero1.webp'
import ImageFive from '../images/hero2.jpg'
import ImageSix from '../images/acceuil_siege.jpg'
import ImageSeven from '../images/accueil_siege2.jpg'
import ImageEight from '../images/ken_paulette.jpg'
  


const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`;
const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;
const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;
const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradiant(0deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100% )
}
`;
const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 90vh;
object-fit: cover;
@media only screen and (max-width:400px) {
    max-width:400px;
}
`;
const HeroContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
color: #fff;
h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
}

p{
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

}

`;
const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem`;

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
`;

const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
    background: #cd853f;
    transform: scale(1.05);
}
`;
const PrevArrow = styled(IoArrowBack)`
${arrowButtons}`;

const NextArrow = styled(IoArrowForward)`
${arrowButtons}`;

const Hero = () => {
    const slides = [
    {
        title: 'Luxury in Bali, Nevada',
        price: '',
        path:'/maboutique',
        label: 'View homes',
        image: ImageOne,
        alt:'House '
    },
    {
        title: 'House in Las vegas, Nevada',
        price: '',
        path:'/maboutique',
        label: 'View homes',
        image: ImageTwo,
        alt:'traning'
    },

    {
        title: 'House in Las vegas, Nevada',
        price: '',
        path:'/maboutique',
        label: 'View homes',
        image: ImageThree,
        alt:'traning'
    },

    {
        title: 'House in Las vegas, Nevada',
        price: '',
        path:'/maboutique',
        label: 'View homes',
        image: ImageFour,
        alt:'traning'
    },
    {
        title: 'House in Las vegas, Nevada',
        price: '',
        path:'/homes',
        label: 'View homes',
        image: ImageFive,
        alt:'traning'
    },
    {
        title: 'House in Las vegas, Nevada',
        price: '2000 FCFA',
        path:'/maboutique',
        label: 'View homes',
        image: ImageSix,
        alt:'traning'
    },
    {
        title: 'Lait corporel',
        price: '4500 FCFA',
        path:'/maboutique',
        label: 'View homes',
        image: ImageSeven,
        alt:'traning'
    },
    {
        title: 'Huile de coco',
        price: '3000 FCFA',
        path:'/maboutique',
        label: 'View homes',
        image: ImageEight,
        alt:'huile de beaute'
    }
]
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null);
    useEffect(() => {
        const nextSlide= () => {
            setCurrent(current => (current === length - 1 ? 0 : current +1));

        };
        timeout.current = setTimeout(nextSlide, 1500);
        return function() {
           if (timeout.current){
               clearTimeout(timeout.current);
           } 
        };
    }, [current, length]
  );
    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1);
  //console.log(current);
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1);
   // console.log(current);
    };
    if(!Array.isArray(slides) || slides.length <=0){
        return null
    }

    return (
        
        <HeroSection>
            <HeroWrapper>
            {slides.map((slide, index)=>{
                return(
                    <HeroSlide key ={index}>
                        {index === current &&(
                        <HeroSlider>
                            <HeroImage src={slide.image} alt= {slide.alt}  />
                            <HeroContent>
                          
                             <h3 className= "text-white">{slide.price} </h3> 
                              <Button to={slide.path} primary='true'
                              css={`
                              max-width: 160px;
                              `}>
                                  {slide.label}
                                  <Arrow />
                                  </Button> 
                            </HeroContent>    
                            
                        </HeroSlider>
                   )}
                    </HeroSlide>
                )
            })}
            <SliderButtons>
                <PrevArrow onClick= {prevSlide} />
                <NextArrow onClick= {nextSlide} />
            </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
} 

export default Hero
