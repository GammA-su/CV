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
      <p>
  Développeur expérimenté et passionné par l'informatique depuis plus de 10 ans, je suis spécialisé en
  <span className="highlight"> HTML, CSS, NodeJS, React et Python</span>.
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
      Conception et développement de sites web en utilisant <span className="highlight">HTML, CSS et JavaScript</span>.
    </li>
    <li>
      Développement d'applications web avec <span className="highlight">Electron et React</span>, offrant des fonctionnalités avancées et une expérience utilisateur optimisée.
    </li>
  </ul>
  <h4 className="highlight">Mise en place de réseaux informatiques hybrides</h4>
  <ul>
    <li>
      Conception et mise en œuvre de solutions de réseau informatique hybride pour l'entreprise <span className="highlight">creadiag.fr</span>, incluant la sélection des composants, l'élaboration de stratégies, l'exécution et la maintenance.
    </li>
    <li>
      Expérience avec les environnements cloud <span className="highlight">Azure</span> et les systèmes de stockage <span className="highlight">Synology</span>.
    </li>
  </ul>
  <h4 className="highlight">Développement d'un serveur d'intelligence artificielle avec API</h4>
  <ul>
    <li>
      Conception et déploiement d'un serveur d'IA offrant des fonctionnalités de traitement du langage naturel (<span className="highlight">NLP</span>) avec différents modèles.
    </li>
    <li>
      Collaboration avec des équipes de chercheurs pour améliorer les performances et l'exactitude des modèles d'IA.
    </li>
  </ul>
</Section>
      <Section title="Projets personnels">
        <p>
          Travail en autodidacte sur des projets personnels de logiciels et de matériel informatique...
        </p>
      </Section>
      <Section title="Administration de systèmes">
        <p>
          Connaissance approfondie des systèmes d'exploitation Ubuntu, Ubuntu Server, Arch, Debian et Windows 11...
        </p>
      </Section>
      <Section title="Compétences techniques">
        <ul>
          <li>Langages de programmation: HTML, CSS, JavaScript (NodeJS), React, Python</li>
          <li>Plateformes cloud: Azure</li>
          <li>Intelligence artificielle: TensorFlow, PyTorch</li>
          <li>Systèmes d'exploitation: Ubuntu, Ubuntu Server, Arch, Debian, Windows 11</li>
          <li>Gestion de serveurs: DNS, serveurs de fichiers</li>
        </ul>
      </Section>
      <Section title="Langues">
        <p>
          - Anglais : niveau C1, maîtrise fluide et aisée de la langue, tant à l'oral qu'à l'écrit.
          <br />- Japonais : niveau approximatif B2-B1, préparation en cours pour la certification JLPT N3.
        </p>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
