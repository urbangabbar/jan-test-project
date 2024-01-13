/// <reference types="cypress" />
import { BasePage } from "./base";

export class HomePage extends BasePage{
    url = "https://magento.softwaretestingboard.com/"

    shopPants(){
        return cy.contains("Luma pants when you shop today*")
    }
    visit(){
        cy.visit(this.url)
        cy.url().should("eq", this.url)
    }
    selectShopPants(){
        this.shopPants().click()
    }
}