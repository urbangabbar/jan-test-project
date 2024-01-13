import { BasePage } from "./base";

export class LoginPage extends BasePage {
    url = 'https://magento.softwaretestingboard.com/customer/account/login'

    emailField(){
        return cy.get('[title="Email"]')
    }
    passwordField(){
        return cy.get('[title="Password"]')
    }

    loginButton(){
        return cy.get('#send2')
    }

    fillInputs(email, password){
        this.emailField().type(email)
        this.passwordField().type(password)
    }

    submitForm(){
        this.loginButton().click()
    }
}