import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div>
    <div id='home'>
        <img src="./images/femme-tenant.png" alt="" className='femme' />
{/* navbar start */}
<nav className="navbar navbar-expand-lg">
  <div className='logo'>
    <img src="./images/logo.png" alt="" />
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a  href="#">Accueil</a>
      <a  href="#">A Propos</a>
      <a  href="#">Services</a>
      <a  href="#">Projet</a>
      <button className='btn-contact'>
      Contact
      </button>
    </div>
  </div>
</nav>
{/* navbar end */}

{/* contact start */}
<div className='contact-container'>
<h1>Agriculture Information Système</h1>
<p className='slogan'>Des solutions numériques pour tous les secteurs.</p>

<form action="">
    <input type="text"  placeholder='Email'/>
    <input type="text"  placeholder='Numero'/>
    <textarea name="" id="" placeholder='message'></textarea>

<button className='btn-form'>
    Soumettre
</button>
</form>
</div>
{/* contact end */}

    </div>
{/* a propos start */}
<div id='about'>
<div className='about-text'>

<div >
    <img src="./images/heureux.png" alt="" className='about-image'/>
</div>

<div className='text'>
<p>
<h2>A propos</h2>
<br />
Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
<br />
<br />
<button className='btn-about'>
Decouvrer nos equipes 
</button>
</p>
</div>
</div>

{/* equipes start */}
<div id='equipe'>

 <div className='equipe-div'>
    <img src="./images/Group 8.png" alt=""  className='eq'/>
    <h3>Nom</h3>
    <p>Proffesion</p>
 </div>

 <div className='equipe-div'>
    <img src="./images/Group 8.png" alt=""  className='eq'/>
    <h3>Nom</h3>
    <p>Proffesion</p>
 </div>

 <div className='equipe-div'>
    <img src="./images/Group 8.png" alt=""  className='eq'/>
    <h3>Nom</h3>
    <p>Proffesion</p>
 </div>

 <div className='equipe-div'>
    <img src="./images/Group 8.png" alt=""  className='eq'/>
    <h3>Nom</h3>
    <p>Proffesion</p>
 </div>


</div>
{/* equipes end */}
</div>

{/* a propos end */}

{/* service start */}

<div id='service'>
    <h2 className='title-service'>Nos Services</h2>

    {/* card 1 */}
    <div className='service-container'>
    <div class='service-icon'>
            <i class="fas fa-globe fa-3x"></i>
        </div>
        <div className='service-text'>
            <h3>Création de sites web sur mesure, logos et spots publicitaires.</h3> 
            Nous proposons des solutions complètes et personnalisées pour la création de sites web, en fonction des besoins spécifiques de votre entreprise. Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'une plateforme complexe, nous garantissons des designs modernes, intuitifs et entièrement responsive. De plus, nous concevons des logos professionnels qui reflètent l'identité de votre marque, ainsi que des spots publicitaires percutants pour renforcer votre visibilité en ligne.
        </div>
    </div>
{/* card 2 */}

<div className='service-container'>
    <div class='service-icon'>
            <i class="fas fa-tractor fa-3x"></i>
        </div>
        <div className='service-text'>
            <h3>Applications pour la gestion agricole.</h3> 
            Nous simplifions la gestion des exploitations agricoles grâce à des applications personnalisées et faciles à utiliser. Nos solutions numériques permettent aux agriculteurs de gérer efficacement leurs cultures, leurs stocks et leurs opérations quotidiennes, tout en améliorant leur productivité. Grâce à nos outils, les agriculteurs peuvent suivre leurs activités en temps réel et prendre des décisions informées pour optimiser leurs ressources.        </div>
    </div>


{/* card 3 */}
<div className='service-container'>
    <div class='service-icon'>
            <i class="fas fa-mobile-alt fa-3x"></i>
        </div>
        <div className='service-text'>
            <h3>Création d'applications web et mobiles.</h3> 
            Nous développons des applications web et mobiles sur mesure, dotées d'une interface intuitive et d'une expérience utilisateur optimisée. Nos solutions permettent aux entreprises d'améliorer leur efficacité opérationnelle, en automatisant les tâches et en facilitant la gestion quotidienne. Grâce à nos applications performantes et faciles à utiliser, vous pouvez vous concentrer sur la croissance de votre entreprise tout en offrant à vos utilisateurs une expérience fluide et engageante.        </div>
    </div>
{/* card 4 */}
<div className='service-container'>
    <div class='service-icon'>
            <i class="fas fa-cogs fa-3x"></i>
        </div>
        <div className='service-text'>
            <h3>Analyse des systèmes et des données.</h3> 
            Nous effectuons des analyses approfondies de vos systèmes pour identifier les besoins spécifiques de votre entreprise et optimiser vos processus existants. En évaluant l'ensemble de votre infrastructure, nous mettons en lumière les points d'amélioration et les opportunités de croissance. De plus, notre expertise en analyse des données vous permet d'extraire des insights précieux pour prendre des décisions éclairées, améliorer l'efficacité opérationnelle et renforcer votre position sur le marché.
     </div>
    </div>

</div>





{/* service end  */}


{/* projet start */}
<br />
<br />
<div id='projet'>
<h3 className='projet-title'>Nos Projets</h3>

<div className='contenu'>
<div className='projet-container'>
<img src="/images/Koumi.png" alt="" className='projet-image'/>
<p>
Koumi est une application facilitant la mise en relation entre les différents acteurs du système agricole.

</p>
<button className='btn-projet'>Voir plus</button>

</div>

<div className='projet-container'>
<img src="/images/Koumi.png" alt="" className='projet-image'/>
<p>
Koumi est une application facilitant la mise en relation entre les différents acteurs du système agricole.

</p>
<button className='btn-projet'>Voir plus</button>

</div>

</div>

{/* footer start*/}

<footer>
{/* <img src="/images/logo.png" alt="" /> */}
<h1 style={{textAlign: 'center', fontSize:'30px'}}>Des solutions numériques pour tous les secteurs.</h1>
</footer>

{/* footer end*/}
</div>

{/* projet end */}



    </div>
    

  )
}