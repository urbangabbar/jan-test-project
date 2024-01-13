import { BasePage } from "./base";


export class PantPage extends BasePage{
    selectProduct(name){
        cy.contains(name).click()
    }
}