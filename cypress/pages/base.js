/// <reference types="cypress" />


export class BasePage {
    signInButton() {
        return cy.get("a").contains("Sign In")
    }
    createAccount() {
        return cy.get("a").contains("Create an Account")
    }

    selectCreateAccount(){
        this.createAccount().click()
        cy.url().should('eq',"https://magento.softwaretestingboard.com/customer/account/create/")
    }
    selectLoginAccount(){
        this.signInButton().click()
    }
}