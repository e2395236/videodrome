// Accueil.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Accueil from './Accueil';
import dataAccueil from './Accueil.json'; // Assurez-vous que le chemin vers votre fichier JSON est correct

describe('Composant Accueil', () => {
  it('affiche chaque paragraphe du contenu de l\'accueil', () => {
    render(<Accueil />);
    dataAccueil.paragraphes.forEach(paragraphe => {
      expect(screen.getByText(paragraphe)).toBeInTheDocument();
    });
  });
});
