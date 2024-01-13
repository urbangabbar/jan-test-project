/// <reference types="cypress" />
import { BasePage } from "./base";


export class CreateAccountPage extends BasePage{
    url = 'https://magento.softwaretestingboard.com/customer/account/create/'
    firstName(){
        return cy.get('[title="First Name"]')
    }
    lastName(){
        return cy.get('[title="Last Name"]')
    }
    email(){
        return cy.get('[title="Email"]')
    }
    password(){
        return cy.get('[title="Password"]')
    }
    confirmPassword(){
        return cy.get('[title="Confirm Password"]')
    }
    createAccountButton(){
        return cy.get('.submit')
    }
    passworErroMessage(){
        return cy.get("#password-error")
    }

    fillDeatils(firstName, lastname, email, password, confirmPass){
        this.firstName().type(firstName)
        this.lastName().type(lastname)
        this.email().type(email)
        this.password().type(password)
        this.confirmPassword().type(confirmPass)
    }
    submitForm(){
        this.createAccountButton().click()
    }
    assertPasswordError(){
        this.passworErroMessage().should('contain', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.').should('be.visible')
    }
    passowrdMatchError(){
        cy.contains('Please enter the same value again.').should('be.visible')
    }
}