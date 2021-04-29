
import React, {useEffect} from 'react'
import styled from 'styled-components';
import {FaUserGraduate} from 'react-icons/fa';
import {GiHairStrands} from 'react-icons/gi';
import {BiFace} from 'react-icons/bi';
import Aos from "aos"
import "aos/dist/aos.css"


    const Container = styled.div`
margin: 0 auto;
padding: 0 50px;
max-width: 1300px;
width: 90%;

@media (max-width:400px){
    padding: 0 10px;
}
@media (max-width:991px) {
    padding: 0 30px;
}

@media (min-width: 1500px) {
    max-width: 1500px;
}

@media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
}
`;

const WorksContent = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 3rem;
`;
const WorksContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 5rem 8rem;
color: #333333;
${Container};
`;


const Underline = styled.div`
  width: 12rem;
  height: 0.2rem;
  background: #CD853F;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width:900px){
  width: 8rem;
  height: 0.15rem;
}
@media only screen and (max-width:600px){
  width: 8rem;
  height: 0.15rem;
}
  `;

const WorksCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2.5rem;
@media only screen and (max-width:900px){
    flex-direction: column;
}
`;

const WorksCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 18rem;
height: 30rem;
background-color: #fff;
box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
border-radius: 20px;
transition: all .5s ease;
&:not(:last-child) {
    margin-right: 5rem;
    @media only screen and (min-width: 1300px){
        margin-right: 10rem;
    }
    @media only screen and (min-width: 1500px){
        margin-right: 10rem;
    }
    @media only screen and (max-width:900px){
        margin-bottom: 10rem;
        margin-right: 0;
    }
    @media only screen and (max-width: 800px){
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
}
@media only screen and (max-width:900px){
        width: 19rem;
}
@media only screen and (max-width:500px){
        width: 19rem;
}
@media only screen and (max-width:350px){
        width: 18rem;
}
@media only screen and (min-width:1890px){
        width: 40rem;
}
&:hover {
    box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #FF00FF;
    color: #fff;
    
}
`;

const WorksIconContainer = styled.div`
width: 9rem;
height: 9rem;
border-radius: 50%;
border: 2px solid #333;
transition: all .3s ease-out;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
`;
const WorksIcon1 = styled(GiHairStrands)`
color: #333;
font-size: 8rem;
`;

const WorksIcon2 = styled(BiFace)`
color: #333;
font-size: 6rem;
`;
const WorksIcon3 = styled(FaUserGraduate)`
color: #333;
font-size: 6rem;
`;

const WorksCardTitle = styled.h3`
font-size: 1.4rem;
font-weight: bold;
padding-top: 1rem;
`;

const WorksCardText = styled.p`
font-size: 1rem;
padding: 1rem 1rem;
`;



    
const Services = () => {

            useEffect(()=>{
        Aos.init({duration: 3000});
      }, []);
      //const [readMore, setReadMore] = useState(true);
    return (
        <div data-aos= "fade-down" >
            <h3 className='text-justify text-center'
            data-aos= "fade-down"> Nos services</h3>
            <Underline />
            <WorksContent>
                <WorksContainer >
                    
                   { /*<WorksTitle className="text-justifytext-center"> Nos services</WorksTitle>*/}
                    
                    <WorksCardContent data-aos= "fade-down">
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon1 className="Icon"/>
                            </WorksIconContainer>
                            <WorksCardTitle>Maquillage</WorksCardTitle>
                            <WorksCardText>
                            Durée variable · 2500 F/ 5000 F /10.000 F / 15.000 F / 20.000 F / 25.000F
Maquillage du jour, du soir, artistique, cinéma, télévision.
                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon2/>
                            </WorksIconContainer>
                            <WorksCardTitle>Onglerie : Gel UV-Résine-Nail Art-Vernis Gel</WorksCardTitle>
                            <WorksCardText>
                            Durée variable · 20.000 F / 25.000 FChablon/vernis 5000 F
Pose french sur gel, sur Résine, décoration des ongles avec du papier foil et autres...
                             

                            </WorksCardText>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon3/>
                            </WorksIconContainer>
                            <WorksCardTitle>La beauté des pieds</WorksCardTitle>
                            <WorksCardText>
                            Durée variable · 5000 f cfa / 8000 f cfa massage chair
Nettoyage des pieds en profondeur, puis relaxation des jambes avec des produits adéquats.

                             

                            </WorksCardText>
                        </WorksCard>
                    </WorksCardContent>
                </WorksContainer>
            </WorksContent> 
        </div>
    )
}

export default Services
