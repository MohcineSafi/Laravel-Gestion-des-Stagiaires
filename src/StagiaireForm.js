// StagiaireForm.js
import React, { useState, useEffect } from 'react';

const StagiaireForm = ({ ajouterStagiaire, stagiaireEnEdition, editerStagiaire }) => {
  const [matricule, setMatricule] = useState('');
  const [nom, setNom] = useState('');
  const [ville, setVille] = useState('');
  const [codePostal, setCodePostal] = useState('');
  const [moyenne, setMoyenne] = useState('');

  useEffect(() => {
    if (stagiaireEnEdition !== null) {
      // If there's a student being edited, populate the form fields with its data
      setMatricule(stagiaireEnEdition.matricule);
      setNom(stagiaireEnEdition.nom);
      setVille(stagiaireEnEdition.ville);
      setCodePostal(stagiaireEnEdition.codePostal);
      setMoyenne(stagiaireEnEdition.moyenne);
    } else {
      // If not in edit mode, clear the form fields
      setMatricule('');
      setNom('');
      setVille('');
      setCodePostal('');
      setMoyenne('');
    }
  }, [stagiaireEnEdition]);

  const viderChamps = () => {
    setMatricule('');
    setNom('');
    setVille('');
    setCodePostal('');
    setMoyenne('');
  };

  const handleAjouterStagiaire = () => {
    const nouveauStagiaire = { matricule, nom, ville, codePostal, moyenne };
    ajouterStagiaire(nouveauStagiaire);
    // Reset the form fields after adding a new student
    setMatricule('');
    setNom('');
    setVille('');
    setCodePostal('');
    setMoyenne('');
  };

  const handleEditerStagiaire = () => {
    // Implement the logic for updating the student in the list
    editerStagiaire({ matricule, nom, ville, codePostal, moyenne });
    // Reset the form fields and exit edit mode
    setMatricule('');
    setNom('');
    setVille('');
    setCodePostal('');
    setMoyenne('');
  };

  return (
    <div>
      <h2>{stagiaireEnEdition !== null ? 'Editer un Stagiaire' : 'Ajouter un Stagiaire'}</h2>
      <input type="text" value={matricule} onChange={(e) => setMatricule(e.target.value)} placeholder="Matricule" />
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" />
      <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} placeholder="Ville" />
      <input type="text" value={codePostal} onChange={(e) => setCodePostal(e.target.value)} placeholder="Code Postal" />
      <input type="text" value={moyenne} onChange={(e) => setMoyenne(e.target.value)} placeholder="Moyenne" />
      {stagiaireEnEdition !== null ? (
        <button onClick={handleEditerStagiaire}>Editer</button>
      ) : (
        <button onClick={handleAjouterStagiaire}>Ajouter</button>
      )}
        <button onClick={viderChamps}>Vider</button>
    </div>
  );
};

export default StagiaireForm;
