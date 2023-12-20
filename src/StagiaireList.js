// StagiaireList.js
import React from 'react';

const StagiaireList = ({ stagiaires, supprimerStagiaire, editerStagiaire }) => {
  return (
    <div>
      <h2>Liste des Stagiaires</h2>
      {stagiaires.length === 0 ? (
        <p style={{ color: 'red' }}>Tableau des stagiaires vide</p>
      ) : (
        <ul>
          {stagiaires.map((stagiaire, index) => (
            <li key={index}>
              {stagiaire ? (
                <>
                  {`ID: ${index + 1}, Matricule: ${stagiaire.matricule}, Nom: ${stagiaire.nom}, Ville: ${stagiaire.ville}, Code Postal: ${stagiaire.codePostal}, Moyenne: ${stagiaire.moyenne}`}
                  <button onClick={() => supprimerStagiaire(index)}>Supprimer</button>
                  <button onClick={() => editerStagiaire(index)}>Editer</button>
                </>
              ) : (
                <p style={{ color: 'red' }}>Stagiaire non trouvé</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StagiaireList;
