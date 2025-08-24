import { loginAsAdmin } from '../../support/scenarios';  // <-- attention au chemin !

beforeEach(() => {
    loginAsAdmin();
});

it('should log in as admin', () => {
    cy.url().should('include', '/dashboard'); // Exemple d'assertion
});


