describe('Forgot Password flow', () => {

    beforeEach(() => {
        // Toujours commencer depuis la page Reset Password
        cy.visit('/auth/login');
        cy.get('p.orangehrm-login-forgot-header').click();
        cy.url().should('include', '/auth/requestPasswordResetCode');
        cy.get('h6').should('contain', 'Reset Password');
    });

    it('should reset password when clicking Reset Password', () => {
        // Saisir le nom d'utilisateur
        cy.get('input[name="username"]').type('Admin');

        // Cliquer sur le bouton "Reset Password"
        cy.get('button.orangehrm-forgot-password-button--reset').click();
        cy.visit('/auth/login');
    });


});



describe('Forgot Password flow Cancel', () => {

    beforeEach(() => {
        // Toujours commencer depuis la page Reset Password
        cy.visit('/auth/login');
        cy.get('p.orangehrm-login-forgot-header').click();
        cy.url().should('include', '/auth/requestPasswordResetCode');
        cy.get('h6').should('contain', 'Reset Password');
    });

    it('should go back to login page when clicking Cancel', () => {
        // Cliquer sur le bouton "Cancel"
        cy.get('button.orangehrm-forgot-password-button--cancel').click();

        // Vérifier qu'on revient bien sur la page login
        cy.url().should('include', '/auth/login');

    });

});
