import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListeFilms from './ListeFilms';

// Simuler une réponse de l'API avec deux films
const mockFilms = [
  {
    titre: 'Alien - Le 8ème passager',
    genres: ['Horreur', 'Science-fiction'],
    description: 'Un vaisseau spatial perçoit une transmission non-identifiée...',
    titreVignette: 'alienle8emepassager.jpg',
    realisation: 'Ridley Scott',
    annee: 1979,
    notes: [3, 4, 5, 2, 1],
    commentaires: [{ commentaire: 'Super film', auteur: 'admin' }]
  },

];

describe('Composant ListeFilms', () => {
  test('Vérifie si les clés sont présentes dans la réponse pour tous les films', async () => {
    
    render(<ListeFilms films={mockFilms} />); // Adaptation nécessaire selon votre implémentation

    // Attendre que les éléments soient présents pour éviter les erreurs liées au chargement asynchrone
    await waitFor(() => {
      mockFilms.forEach((film) => {
        expect(screen.getByText(film.titre)).toBeInTheDocument();
        expect(screen.getByText(film.genres.join(', '))).toBeInTheDocument();
        expect(screen.getByText(film.description)).toBeInTheDocument();
        expect(screen.getByText(String(film.annee))).toBeInTheDocument();
      });
    });
  });

});


