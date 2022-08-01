/// <reference types ="cypress"/>

it('SiteVisit', function(){

    cy.visit('https://www.boibazar.com/')
    cy.get('.col-md-2 > .dropdown > .btn').trigger('mouseover')
    cy.get('.col-md-2 > .dropdown > .btn > .selectedSearchType').click()
    
    })
