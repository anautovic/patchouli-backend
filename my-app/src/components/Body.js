import React, {useEffect} from 'react'
import styled from 'styled-components'
import Image from '../images/accueil.mp4'
import Aos from "aos"
import "aos/dist/aos.css"


export const WelcomeContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 7rem;
`;

export const WelcomeContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #fff;
@media only screen and (max-width:1000px) {
    flex-direction: column;
}
`;

export const WelcomeImg = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
`;

export const video = styled.video`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 300px;
@media only screen and (min-width:300px) {
    width: 300px;
}
@media only screen and (min-width:400px) {
    width: 400px;
}
@media only screen and (min-width:600px) {
    width: 500px;
}
@media only screen and (min-width:800px) {
    width: 800px;
}
@media only screen and (min-width:1000px) {
    width: 500px;
    height: 400px;
}
@media only screen and (min-width:1200px) {
    width: 600px;
}
@media only screen and (min-width:1500px) {
    width: 750px;
}
@media only screen and (min-width:1800px) {
    width: 900px;
}
`;

export const WelcomeContentText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3rem;
@media only screen and (min-width:1200px) {
    padding: 3rem 6rem;
}
@media only screen and (min-width:1500px) {
    padding: 3rem 9rem;
}
`;

export const WelcomeContentTitle = styled.h2`
font-size: 3.6rem;
font-weight: bold;
`;

export const WelcomeText = styled.p`
font-size: 1.8rem;
&:not(:last-child) {
    margin-bottom: 2rem;
}
`;





const Body = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
      }, []);
    return (
<div  data-aos= "fade-up">

   <WelcomeContainer>
                <WelcomeContent>
                    <WelcomeImg>
                        
                    <video data-aos= "fade-up"    src={Image} class="Video__Vid-sc-1ugig2z-2 dMaYSN" width="100%"></video>
                    </WelcomeImg>
                    <WelcomeContentText>
                        <WelcomeContentTitle>ARCHIPEL CM</WelcomeContentTitle>
                        <WelcomeText>
                        est une entreprise spécialisée dans la mise en relation des chercheurs d'emplois,
                         des entreprises et des professionnels.
                          Nous accompagnons notre clientèle à développer son effort 
                          et son champ de contact à travers nos bases de données. 
                          Accédez à nos différents services en visitant notre site!
                        </WelcomeText>
                        <WelcomeText>
                        Élargissons notre réseau et nous atteindrons ensemble la partie cachée de l'ICEBERG
                        </WelcomeText>
                    </WelcomeContentText>
                </WelcomeContent>


            </WelcomeContainer>
 
</div>
)
}

export default Body
