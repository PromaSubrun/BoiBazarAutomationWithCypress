/// <reference types ="cypress"/>

it('SiteVisit', function(){

    cy.visit('https://www.boibazar.com/')
    cy.get(':nth-child(9) > .blink_bb').click()
    cy.get('[href="https://www.boibazar.com/book/ahobban"] > .fixed-container-book > .wpcsp-thumb').click()
    cy.get('#btn-heart').click()

    })