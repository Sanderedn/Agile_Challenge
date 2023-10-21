describe('Login in Google Drive', () => {
  it('Login', () => {
      cy.clearCookies();
      cy.visit('https://drive.google.com/drive/my-drive');
      cy.get('input[type="email"]', { timeout: 10000 }).should('be.visible');
      cy.get('input[type="email"]').type('ednelson.alex@gmail.com {enter}');
      // cy.get('#identifierNext').click({force : true});
      // cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible');
      // cy.get('input[type="password"]').type(`"aaaa"{enter}`);
     

  })
});




