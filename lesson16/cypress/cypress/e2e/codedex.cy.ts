describe('Test Scenario for authentication and starting course', () => {
    beforeEach(() => {
        cy.visit('https://codedex.io/');
    });

    it('Should sign in into site', () => {
        cy.get('div.center-content > button').click();
        cy.get('video').should('be.visible').then(($video) => {
            const video = $video[0];
            cy.wait(5000);
            cy.wrap(video).should('have.prop', 'currentTime').should('be.gt', 0);
        });
        cy.get('#end-video').click();
        cy.contains('Log in').click();
        cy.get('input[name="email"]').type('nastasuper5@gmail.com');
        cy.wait(1000);
        cy.get('input[name="password"]').type('SomePassword');
        cy.wait(1000);
        cy.get('form > div.submit-btn-container > button').click();
        cy.url().should('eq', 'https://www.codedex.io/home');
    });
    it('Should open Python course', () => {
        cy.get('div.icon-container.nes-pointer svg g path').click();
        cy.get('div.nav-container-links div:nth-child(1) a button').click();
        cy.get('#scroll-target-for-course-row-python div:nth-child(1) div.bottom-card div.top-card').click();
        cy.get('#parallax-banner .third-layer div:nth-child(1) div a').click();
        cy.url().should('eq', 'https://www.codedex.io/python/01-setting-up');
    });
});
