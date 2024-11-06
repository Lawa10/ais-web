import React, { useState, useEffect, handleSubmit, handleChange } from 'react'
import './Home.css'
import { motion } from "framer-motion";
// import emailjs from 'emailjs-com';
import { NavLink } from 'react-router-dom';

export default function Home() {

  
    const [color, setColor] = useState(false);
    const [formData, setFormData] = useState({
      email: '',
      numero: '', // Add numero to formData
      message: ''
    });
  
  
    // Form handling functions
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send email via EmailJS
      emailjs.sendForm('service_zdc1fzn', 'template_tvqdnce', e.target, 'YCOIEWOGirKiCXspT')
        .then((result) => {
          console.log(result.text);
          alert('Message envoyé avec succès !');
        }, (error) => {
          console.log(error.text);
          alert('Échec de l\'envoi du message. Veuillez réessayer.');
        });
    };
    const changeColor = () => {
      if (window.scrollY >= 90) {  // Utiliser scrollY pour obtenir la position verticale
        setColor(true);
      } else {
        setColor(false);
      }
    };
    
    useEffect(() => {
      window.addEventListener('scroll', changeColor);
      return () => window.removeEventListener('scroll', changeColor); // Nettoyage de l'event listener
    }, []);
    

    
   
    
    return (
      <div>
        <div id='home'>
          <img src="./images/femme-tenant.png" alt="" className='femme' />
          
          {/* navbar start */}
          <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className={color ? 'menu-bar' : 'menu-bar-bg'}>
          <div className="logo" style={{ marginRight: 'auto' }}>
            <img src="./images/logo.png" alt="Logo" />
          </div>
          <NavLink to="/" className="nav-link" activeClassName="active" exact>
            Accueil
          </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            A Propos
          </NavLink>
          <NavLink to="/services" className="nav-link" activeClassName="active">
            Services
          </NavLink>
          <NavLink to="/projet" className="nav-link" activeClassName="active">
            Projet
          </NavLink>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink to="/contact" className="btn-contact" activeClassName="active">
              Contact
            </NavLink>
          </motion.div>
        </div>
      </div>
    </nav>
          {/* navbar end */}
{/* contact start */}
<div className='contact-container'>
<h1 className='titre'>Agriculture Information Système</h1>
<p className='slogan'>Des solutions numériques pour tous les secteurs.</p>

<form onSubmit={handleSubmit}>
    <input  
       type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}/>
        
    <input 
       type="numero"
        name="numero"
        placeholder="Numero"
        value={formData.numero}
        onChange={handleChange}/>


    <textarea 
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}></textarea>

<motion.div
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
>
<button className='btn-form' type="submit">
    Soumettre
</button>

</motion.div>

</form>
</div>
{/* contact end */}

    </div>
{/* a propos start */}
<motion.div
                   
                    // style={{
                    //   opacity: aboutOpacity,
                    //   scale
                    // }}
                >
<div id='about'>
<div className='about-text'>

<div >
    <img src="./images/mains.jpg" alt="" className='about-image'/>
</div>

<div className='text'>
<p>
<h2>A propos</h2>
<br />
A.I.S <b>( Agrobusiness Information System )</b>est une entreprise innovante spécialisée dans le développement de solutions technologiques de pointe adaptées aux besoins des entreprises modernes. Forte d'une équipe d'experts passionnés, A.I.S se consacre à offrir des services de qualité en <b>ingénierie logicielle</b>, intelligence artificielle, et déploiement d'applications sur mesure. Nous accompagnons nos clients à chaque étape de leur transformation numérique, en intégrant des technologies avancées et des pratiques de développement agile pour garantir des résultats performants et durables. Chez A.I.S, notre mission est d'accélérer la croissance de nos partenaires tout en favorisant l'innovation et la créativité pour un avenir numérique durable.

<br />
<br />
{/* <motion.div
 whileHover={{ scale: 1.2 }}  // Zoom à 120% lors du survol
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
 
>
<button className='btn-about'>
Decouvrer nos equipes 
</button>
</motion.div> */}

</p>
</div>
</div>

{/* equipes start */}
{/* <div id='equipe'>

<motion.div
 whileHover={{ scale: 1.2 }}  // Zoom à 120% lors du survol
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
 
>
<div className='equipe-div'>
    <img src="./images/Group 8.png" alt=""  className='eq'/>
    <h3>Nom</h3>
    <p>Proffesion</p>
 </div>
</motion.div>
 
<motion.div
 whileHover={{ scale: 1.2 }}  // Zoom à 120% lors du survol
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
 
>

 <div className='equipe-div'>
    <img src="./images/Group 8.png" alt=""  className='eq'/>
    <h3>Nom</h3>
    <p>Proffesion</p>
 </div>
 </motion.div>

 <motion.div
 whileHover={{ scale: 1.2 }}  // Zoom à 120% lors du survol
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
 
>
<div className='equipe-div'>
    <img src="./images/Group 8.png" alt=""  className='eq'/>
    <h3>Nom</h3>
    <p>Proffesion</p>
 </div>

</motion.div>
 
<motion.div
 whileHover={{ scale: 1.2 }}  // Zoom à 120% lors du survol
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
 
>
 <div className='equipe-div'>
    <img src="./images/Group 8.png" alt=""  className='eq'/>
    <h3>Nom</h3>
    <p>Proffesion</p>
 </div>

 </motion.div>
</div> */}
 {/* equipes end */}

</div>

                </motion.div>

{/* a propos end */}




{/* service start */}

<div id='service'>
    <h2 className='title-service'>Nos Services</h2>

    {/* card 1 */}
    <motion.div
 whileHover={{ scale: 1.1 }}  // Zoom à 120% lors du survol
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
 
>
<div className='service-container'>
    <div class='service-icon'>
            <i class="fas fa-globe fa-3x"></i>
        </div>
        <div className='service-text'>
            <h3>Création de sites web sur mesure, logos et spots publicitaires.</h3> 
            Nous proposons des solutions complètes et personnalisées pour la création de sites web, en fonction des besoins spécifiques de votre entreprise. Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'une plateforme complexe, nous garantissons des designs modernes, intuitifs et entièrement responsive. De plus, nous concevons des logos professionnels qui reflètent l'identité de votre marque, ainsi que des spots publicitaires percutants pour renforcer votre visibilité en ligne.
        </div>
    </div>
</motion.div>
   
{/* card 2 */}

<motion.div
 whileHover={{ scale: 1.1 }}  // Zoom à 120% lors du survol
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
 
>
<div className='service-container'>
    <div class='service-icon'>
            <i class="fas fa-tractor fa-3x"></i>
        </div>
        <div className='service-text'>
            <h3>Applications pour la gestion agricole.</h3> 
            Nous simplifions la gestion des exploitations agricoles grâce à des applications personnalisées et faciles à utiliser. Nos solutions numériques permettent aux agriculteurs de gérer efficacement leurs cultures, leurs stocks et leurs opérations quotidiennes, tout en améliorant leur productivité. Grâce à nos outils, les agriculteurs peuvent suivre leurs activités en temps réel et prendre des décisions informées pour optimiser leurs ressources. 
            <p></p>     
              </div>
    </div>

    </motion.div>
{/* card 3 */}
<motion.div
 whileHover={{ scale: 1.1 }}  // Zoom à 120% lors du survol
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
 
>
<div className='service-container'>
    <div class='service-icon'>
            <i class="fas fa-mobile-alt fa-3x"></i>
        </div>
        <div className='service-text'>
            <h3>Création d'applications web et mobiles.</h3> 
            Nous développons des applications web et mobiles sur mesure, dotées d'une interface intuitive et d'une expérience utilisateur optimisée. Nos solutions permettent aux entreprises d'améliorer leur efficacité opérationnelle, en automatisant les tâches et en facilitant la gestion quotidienne. Grâce à nos applications performantes et faciles à utiliser, vous pouvez vous concentrer sur la croissance de votre entreprise tout en offrant à vos utilisateurs une expérience fluide et engageante.   
            <p></p>
                 </div>
    </div>

</motion.div>

{/* card 4 */}
<motion.div
 whileHover={{ scale: 1.1 }}  // Zoom à 120% lors du survol
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
 
>
<div className='service-container'>
    <div class='service-icon'>
            <i class="fas fa-cogs fa-3x"></i>
        </div>
        <div className='service-text'>
            <h3>Analyse des systèmes et des données.</h3> 
            Nous effectuons des analyses approfondies de vos systèmes pour identifier les besoins spécifiques de votre entreprise et optimiser vos processus existants. En évaluant l'ensemble de votre infrastructure, nous mettons en lumière les points d'amélioration et les opportunités de croissance. De plus, notre expertise en analyse des données vous permet d'extraire des insights précieux pour prendre des décisions éclairées, améliorer l'efficacité opérationnelle et renforcer votre position sur le marché.
     </div>
    </div>

</motion.div>

</div>





{/* service end  */}


{/* projet start */}
<br />
<br />
<div id='projet'>
<h3 className='projet-title'>Projet</h3>

<div className='contenu'>
<div className='projet-container'>
<img src="/images/Koumi.png" alt="" className='projet-image'/>
<p>
Koumi est une application facilitant la mise en relation entre les différents acteurs du système agricole.

</p>
<motion.div
 whileHover={{ scale: 1.1 }}  // Zoom à 120% lors du survol
 whileTap={{ scale: 0.9 }}    // Réduction à 90% lors du clic
 transition={{ duration: 0.3 }}  // Durée de l'animation
 
>
<button className='btn-projet'>Voir plus</button>

</motion.div>

</div>

</div>

{/* footer start*/}

<footer>
{/* <img src="/images/logo.png" alt="" /> */}
<h1 style={{textAlign: 'center', fontSize:'30px'}}>Des solutions numériques pour tous les secteurs.</h1>

<div className='info-container'>

<div className='info'>
  <i className="fas fa-phone-alt"></i>
  <h4>+223  83 49 66 74</h4>
</div>

<div className='info'>
  <i className="fas fa-envelope"></i>
  <h4>contact@aismali.com</h4>
</div>

<div className='info'>
  <i className="fas fa-map-marker-alt"></i>
  <h4>Baco djicoroni golf</h4>
</div>




</div>


</footer>

{/* footer end*/}
</div>

{/* projet end */}



    </div>
    

  )
}
