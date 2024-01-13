/// <reference types="cypress" />
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { PantPage } from "../pages/pant";

describe("Add to cart", ()=> {
    let homePage 
    beforeEach(()=> {
        homePage = new HomePage()
        homePage.visit()
        homePage.selectLoginAccount()
        const loginPage = new LoginPage()
        loginPage.fillInputs("abc+22222267@gmail.com", "Jumpin@123")
        loginPage.submitForm()
    })  

    it('Add to cart a jogger', ()=>{
        homePage.selectShopPants()
        const pantpage = new PantPage()
        pantpage.selectProduct("Portia Capri")
    })
})