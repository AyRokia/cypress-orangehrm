import { loginAsAdmin } from '../../support/scenarios';
import { logout } from '../../support/scenarios';
beforeEach(() => {
    loginAsAdmin();
});

it('should log in as admin', () => {
    cy.url().should('include', '/dashboard'); // Exemple d'assertion
});

after(() => {
    logout();
});