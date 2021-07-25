import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {Link} from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding: 5px 5px;
  flex-flow: row nowrap;
  li {
    padding: 8px 8px;
    color:black;
    &:hover {
    color: hsl(125, 71%, 66%);
    text-decoration: none
}
  }
  @media (max-width: 768px) {
    
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

    height: 90vh;
    width: 100vw;
    position: fixed;
    padding: 4px 4px;

z-index: 22;

background: #cd853f;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;

    
    li {
      display:flex;
      color: white;
      align-items:center;
      justify-content: center;
      font-size:1.5rem;
    }
  }
`;
const NavMenuLinks = styled(Link)`
padding: 18px 10px;
align-items:center;
justify-content: center;

&:hover {
    box-shadow: -2px 0 hsl(125, 71%, 66%);
    color: hsl(125, 71%, 66%);
    text-decoration: none
}
`;
const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right:24px;
@media screen and (max-width:768px){
    display:none;
}
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} >
     <NavMenuLinks to = '/'> <li>Accueil</li></NavMenuLinks>  
     <NavMenuLinks to ='/services' ><li>Services</li></NavMenuLinks>
     <NavMenuLinks to= 'formation'><li>Formation</li></NavMenuLinks>
      <NavMenuLinks to= '/maboutique'><li>E-Shop</li></NavMenuLinks> 
      <NavMenuLinks to = 'gallerie'><li>Galerie</li></NavMenuLinks> 
       

      <NavBtn>
                <Button primary= 'true'>
                <a style={{
                    color:'white',
                    textDecoration:'none'
                    

                }} href="tel:+237 699504975">Contact us</a>
                </Button>
            </NavBtn>
        
    </Ul>
    
  )
}

export default RightNav