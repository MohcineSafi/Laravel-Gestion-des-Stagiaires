// App.js
import React, { useState } from 'react';
import StagiaireForm from './StagiaireForm';
import StagiaireList from './StagiaireList';
import './App.css';

const App = () => {
  const [stagiaires, setStagiaires] = useState([]);
  const [stagiaireEnEdition, setStagiaireEnEdition] = useState(null);
  const [stagiairesFiltres, setStagiairesFiltres] = useState([]);
  const [nomFiltre, setNomFiltre] = useState('');
  const [villeFiltre, setVilleFiltre] = useState('');

  const ajouterStagiaire = (nouveauStagiaire) => {
    setStagiaires([...stagiaires, nouveauStagiaire]);
  };

  const supprimerStagiaire = (index) => {
    const nouvelleListe = stagiaires.filter((_, i) => i !== index);
    setStagiaires(nouvelleListe);
  };

  const editerStagiaire = (index) => {
    setStagiaireEnEdition({ ...stagiaires[index], index });
  };

  const handleEditerStagiaire = (nouveauStagiaire) => {
    const nouvelleListe = stagiaires.map((s, i) => (i === stagiaireEnEdition.index ? nouveauStagiaire : s));
    setStagiaires(nouvelleListe);
    setStagiaireEnEdition(null);
  };

  const filtrerStagiaires = () => {
    const resultatsFiltres = stagiaires.filter((stagiaire) =>
      stagiaire.nom.toLowerCase().includes(nomFiltre.toLowerCase()) &&
      stagiaire.ville.toLowerCase().includes(villeFiltre.toLowerCase())
    );
    setStagiairesFiltres(resultatsFiltres);
  };

  const initialiserRecherche = () => {
    setNomFiltre('');
    setVilleFiltre('');
    setStagiairesFiltres([]);
  };

  return (
    <div>
      <h1>Gestion des Stagiaires</h1>
      <StagiaireForm
        ajouterStagiaire={ajouterStagiaire}
        stagiaireEnEdition={stagiaireEnEdition}
        editerStagiaire={handleEditerStagiaire}
      />
      <br />
      <div>
        <label htmlFor="nomFiltre">Nom: </label>
        <input type="text" id="nomFiltre" value={nomFiltre} onChange={(e) => setNomFiltre(e.target.value)} />
        <label htmlFor="villeFiltre">Ville: </label>
        <input type="text" id="villeFiltre" value={villeFiltre} onChange={(e) => setVilleFiltre(e.target.value)} />
        <button onClick={filtrerStagiaires}>Filtrer ville et nom</button>
        <button onClick={initialiserRecherche}>Initialiser recherche</button>
      </div>
      <StagiaireList
        stagiaires={stagiairesFiltres.length > 0 ? stagiairesFiltres : stagiaires}
        supprimerStagiaire={supprimerStagiaire}
        editerStagiaire={editerStagiaire}
      />
    </div>
  );
};

export default App;
