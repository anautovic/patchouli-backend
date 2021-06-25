import React, {useState} from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData';
import {Button} from '../components/Button';
import {FaBars}  from 'react-icons/fa';
import Logo_pat from '../images/logo_pat.webp'



const Nav = styled.nav`
height:80px;
display: flex;
justify-content:space-between; 
padding: 1rem 2rem;
z-index:100;
position: fixed;
width:100%;
${props => props.defil && css`
background-color:transparent;`};
background: ${({navbar}) =>(navbar? '#151414': 'transparent')} ;
`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height:100%;
cursor:pointer;
text-decoration: none;
font-size:1.32rem;


`

const Logo = styled(Link)`
${NavLink}
font-style: italic;
margin-top:0.1rem;
`;
const MenuBars = styled(FaBars)`
display:none;
@media screen and (max-width:768px){
    display:block;
    height:30px;
    width:30px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    color: #CD853F;
    transform: translate(-50%, 25%);
     
}
`
const NavMenu = styled.div`
display: flex;
align-items: center; 
margin-right: -48px;
font-size: 1.2rem;
&:hover {
    font-weight: bold;
   
    text-decoration:none;
    color:#CD853F
}

@media screen and  (max-width: 768px) {
    display: none
}

`

const NavMenuLinks = styled(Link)`
${NavLink};

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

const Navbar = ({toggle}) => {
    const [navbar, setNavbar]= useState(false);

    const changeBackground = ()=> {
        if (window.scrollY >= 80) {
            setNavbar(true);

        }else{
            setNavbar(false);
        }
         
    };
    
    window.addEventListener('scroll', changeBackground);
    

    return ( 
        <>
        
        <Nav navbar= {navbar}>
        <Logo to="/"><img
        src={Logo_pat}
        width="75"
        height="60"
        
        alt="patchouli_logo"
      /></Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
         {menuData.map((item, index) =>(
             <NavMenuLinks to = {item.link}
             key={index} 
             >
                 {item.title}
             </NavMenuLinks>
         )
          )}    
        </NavMenu>
            <NavBtn>
                <Button to='/contact' primary= 'true'>
                Contact us
                </Button>
            </NavBtn>
            </Nav>
        
        
        </>
    )
}

export default Navbar
