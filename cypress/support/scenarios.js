
import { USERS } from './constants';

export function loginAsAdmin() {
    cy.login(USERS.admin.username, USERS.admin.password);
}


export function logout() {
    cy.logout();
    cy.url().should('include', '/auth/login');
}
