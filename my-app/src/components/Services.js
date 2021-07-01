import React, {useEffect} from 'react'
import styled from 'styled-components';
import {FaUserGraduate} from 'react-icons/fa';
import {GiHairStrands} from 'react-icons/gi';
import {BiFace} from 'react-icons/bi';
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';





const Underline = styled.div`
height: 0.25rem;
width: 5rem;
background: #CD853F;
margin-left: auto;
margin-right: auto;
`;


 const WorksCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5rem;
@media only screen and (max-width:900px){
    flex-direction: column;
}
`;

 const WorksCard = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 18rem;
height: 30rem;
text-decoration: none;
background-color: #fff;
box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.19);
border-radius: 20px;
&:hover{
    text-decoration:none;
}
transition: all .5s ease;
&:not(:last-child) {
    margin-right: 5rem;
    @media only screen and (min-width: 1300px){
        margin-right: 5rem;
        width:15rem;
    }
    @media only screen and (min-width: 1500px){
        margin-right: 5rem;
        width:15rem;
    }
    @media only screen and (max-width:900px){
        margin-bottom: 10rem;
        margin-right: 0;
        width:15rem;
    }
    @media only screen and (max-width: 800px){
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12);
       
    }
}
@media only screen and (max-width:900px){
        width: 15rem;
}
@media only screen and (max-width:500px){
        width: 15rem;
}
@media only screen and (min-width:1890px){
        width: 25rem;
}
&:hover {
    box-shadow:  0px 10px 45px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #E38B06;
    color: #fff;
    
}
`;

 const WorksIconContainer = styled.div`
width: 8rem;
height: 8rem;
border-radius: 50%;
border: 2px solid #333;
transition: all .3s ease-out;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
`;
 const WorksIcon1 = styled(FaUserGraduate)`
color: #333;
font-size: 5rem;
`;

 const WorksIcon2 = styled(BiFace)`
color: #333;
font-size: 5rem;
`;
 const WorksIcon3 = styled(GiHairStrands)`
color: #333;
font-size: 5rem;
`;

 const WorksCardTitle = styled.h3`
font-size: 1.5rem;
font-weight: bold;
padding-top: 1rem;
`;

 const WorksCardText = styled.p`
font-size: 1rem;
padding: 1rem 1.5rem;
`;
const Services = () => {

            useEffect(()=>{
        Aos.init({duration: 3000});
      }, []);
      //const [readMore, setReadMore] = useState(true);
    return (
        <>
        <div  >
        <h3 className='text-justify text-center '
            data-aos= "fade-down"> Nos services</h3>
            <Underline />
            


        <div className= "container-fluid">
                    
                    <WorksCardContent data-aos="fade-down">
                        <WorksCard to= '/services'>
                            <WorksIconContainer>
                                <WorksIcon1 className="Icon"/>
                            </WorksIconContainer>
                            <WorksCardTitle>Maquillage</WorksCardTitle>
                            <WorksCardText>
                            Durée variable · 2500 F/ 5000 F /10.000 F / 15.000 F / 20.000 F / 25.000F
Maquillage du jour, du soir, artistique, cinéma, télévision.
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard  to= '/services'>
                            <WorksIconContainer>
                                <WorksIcon2/>
                            </WorksIconContainer>
                            <WorksCardTitle>Onglerie - Maquillage</WorksCardTitle>
                            <WorksCardText>
                            Prix variable · 20.000 F / vernis 5000 F
Pose french sur gel, sur Résine, décoration des ongles avec du papier foil et autres...
                             
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard to= '/services_coiffure'>
                            <WorksIconContainer>
                                <WorksIcon3/>
                            </WorksIconContainer>
                            <WorksCardTitle>Prestation en Coiffure</WorksCardTitle>
                            <WorksCardText>
                            Céramique, Teinture, Pose pérruque Shampoing, Coiffure, Défrisage,Rasta, Nattes, 
                            </WorksCardText>
                        </WorksCard>
                    </WorksCardContent>
                

            </div>
        </div>

    </>
    )
}

 export default Services
