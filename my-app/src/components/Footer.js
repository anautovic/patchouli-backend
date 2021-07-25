import React from 'react'
import '../css/footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>

<footer className="footer-section">
        <div className="container-fluid">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Antenne Kotto, Bonamoussadi, Douala</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Appelez nous</h4>
                                <span> 699504975 | 690915116 </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>nkenpaulette@yahoo.fr</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            
                            <div className="footer-text">
                                <p>Venez découvrir l'institut de beauté Patchouli, situé au carrefour Antenne Kotto Bonamoussadi pour prendre soin de vous mais aussi pour faire 
                                votre shopping près de chez vous à prix discount.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/institutpatchouli"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a  href="/"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="https://www.instagram.com/institut_de_beaute_patchouli/?hl=en"><i className="fab fa-instagram google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to ="/">Accueil</Link></li>
                                <li><Link to="/maboutique">E-shop</Link></li>
                                <li><Link to="/formation">Formation</Link></li>
                                <li><Link to="/gallerie">Galerie</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Abonnez-vous</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Ne manquez pas de vous abonnez sur nos pages facebook</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="https://interna.vercel.app">Radiance consulting</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link to="/">Accueil</Link></li>
                                <li><Link to="/maboutique">E-shop</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
           
        </>
    )
}

export default Footer
