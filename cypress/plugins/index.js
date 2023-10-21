module.exports = (on, config) => {
    on('task', {
        async login(googleUser) {
            const { email, password } = googleUser;
           
            cy.visit('https://accounts.google.com/ServiceLogin?service=wise&passive=true&continue=https://drive.google.com/drive/my-drive');
            cy.get('input[type="email"]', { timeout: 10000 }).should('be.visible');
            cy.get('input[type="email"]').type(`${email}{enter}`);
            cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible');
            cy.get('input[type="password"]').type(`${password}{enter}`);
           
       },
    });
   };