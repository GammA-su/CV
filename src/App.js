import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Section title="Profil professionnel">
  <p>En tant que développeur Full Stack expérimenté et passionné par l'informatique depuis plus de 10 ans, je suis spécialisé en HTML, CSS, NodeJS, React, Python, administration système et réseau. <br />

J'ai développé au fil des années une grande capacité d'adaptation à différentes tâches et technologies, grâce à ma curiosité et mon intérêt pour l'ensemble de l'univers informatique, qu'il s'agisse de logiciels ou de matériel. 
   </p>
</Section>

      <Section title="Formation">
        <p>Prépa MP2I (Math, Physique, Ingénierie Informatique)</p>
        <p>Lycée Carnot, 1 an d'étude</p>
        <p>Licence 1 en CMI MNE (Cursus Master en Ingénierie en Micro et Nano Électronique)</p>
        <p>Université de Strasbourg, Licence 1</p>
      </Section>
      <Section title="Expériences professionnelles">
        <h4 className="highlight">Création de sites web et d'applications web</h4>
        <ul>
          <li>
            Conception et développement de sites web responsives et performants en utilisant <span className="highlight">HTML, CSS, JavaScript</span>, et des frameworks modernes tels que <span className="highlight">React</span> et <span className="highlight">Vue.js</span>.
          </li>
          <li>
            Développement d'applications web et mobiles avec <span className="highlight">Electron, React Native</span> et <span className="highlight">Ionic</span>, offrant des fonctionnalités avancées et une expérience utilisateur optimisée.
          </li>
        </ul>
        <h4 className="highlight">Mise en place de réseaux informatiques hybrides</h4>
        <ul>
          <li>
            Conception et mise en œuvre de solutions de réseau informatique hybride pour l'entreprise <span className="highlight">creadiag.fr</span>, incluant la sélection des composants, l'élaboration de stratégies, l'exécution et la maintenance.
          </li>
          <li>
            Expérience avec les environnements cloud <span className="highlight">Azure, AWS</span> et les systèmes de stockage <span className="highlight">Synology, QNAP</span>.
          </li>
        </ul>
        <h4 className="highlight">Développement d'un serveur d'intelligence artificielle avec API</h4>
        <ul>
          <li>
            Conception et déploiement d'un serveur d'IA offrant des fonctionnalités de traitement du langage naturel (<span className="highlight">NLP</span>) avec différents modèles, tels que <span className="highlight">GPT-2, BERT</span> et <span className="highlight">Word2Vec</span>.
          </li>
          <li>
            Collaboration avec des équipes de chercheurs pour améliorer les performances et l'exactitude des modèles d'IA, ainsi que l'implémentation d'API REST pour faciliter l'intégration avec d'autres applications et services.
</li>
</ul>
</Section>
<Section title="Projets personnels">
<p>
J'ai réalisé plusieurs projets personnels variés, notamment:
<ul>
  <li>Création d'un  <span className="highlight">moteur</span> en  <span className="highlight">JavaScript</span> et  <span className="highlight">Node.js </span>pour visualiser des romans sous forme d'images (Visual Novel)</li> 
  <li>Utilisation d'une application  <span className="highlight">Electron et Node.js</span> pour chatter avec  <span className="highlight">GPT3.5</span> et autres modèles equivalent</li> 
  <li>Contribution et forkage d'une application pour l'utilisation d'un  <span className="highlight">bot </span>sur Twitch avec  <span className="highlight">vStudio</span> et API  <span className="highlight">text-to-speech d'Azure</span></li> 
  <li>Création d'un site web en  <span className="highlight">HTML, CSS et JS Vanilla</span></li> 
  <li>Jeu avec <span className="highlight"> Node.js et HTML</span></li> 
  <li>Site web pour faire le lien vers différents réseaux et informations sur soi-même</li> 
  <li>Mise en place d'un  <span className="highlight">serveur Ubuntu</span> en tant que  <span className="highlight">API pour du calcul d'intelligence artificielle</span> avec des GPU tels que  <span className="highlight">CUDA et une RTX2060s</span></li> 
  <li>Création d'un  <span className="highlight">CV simple et clair</span> pour une présentation de soi-même et de ses compétences et expériences en  <span className="highlight">Reactjs</span></li> 
  <li>Sécurisation du serveur AI avec  <span className="highlight">OpenVPN</span>,  <span className="highlight">un pare-feu UFW</span>, un système de sécurité  <span className="highlight">fail2ban</span> et des mesures de mise à jour avec  <span className="highlight">Ubuntu Pro.</span></li>
</ul>


</p>
</Section>
<Section title="Administration de systèmes">
<p>
Connaissance approfondie des systèmes d'exploitation Ubuntu, Ubuntu Server, Arch, Debian et Windows 11, ainsi que de la configuration et de la gestion des serveurs, des bases de données et des services de messagerie.
</p>
</Section>
<Section title="Compétences techniques">
<ul>
<li>Langages de programmation: <span className="highlight"> HTML, CSS, JavaScript (NodeJS), React, Python, Electron, Vue.js, React Native, Ionic</span></li>
<li>Plateformes cloud:  <span className="highlight">Azure, AWS</span></li>
<li>Intelligence artificielle: <span className="highlight">TensorFlow, PyTorch, GPT-2, BERT, Word2Vec, Neo4J, GODEL</span> </li>
<li>Systèmes d'exploitation:  <span className="highlight">Ubuntu, Ubuntu Server, Arch, Debian, Windows 11</span></li>
<li>Gestion de serveurs:  <span className="highlight">DNS, serveurs de fichiers, bases de données, services de messagerie, LDAP (Active Directory)</span></li>
</ul>
</Section>
<Section title="Langues">
<p>
- Anglais : niveau <span className="highlight">C1</span>, maîtrise fluide et aisée de la langue, tant à l'oral qu'à l'écrit.
<br />- Japonais : niveau approximatif <span className="highlight">B2-B1</span>, préparation en cours pour la certification JLPT N3.
</p>
</Section>
<Footer />
</div>
);
}

export default App;





