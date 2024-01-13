/// <reference types="cypress" />
import { HomePage } from "../pages/home"
import { LoginPage } from "../pages/login";


describe('Login Flow', ()=>{
    let logingPage
    beforeEach(()=> {
        const home = new HomePage();
        home.visit()
        home.selectLoginAccount()
        logingPage = new LoginPage()
    })
    it('Perform login', ()=>{
        logingPage.fillInputs("abc+22222267@gmail.com", "Jumpin@123")
        logingPage.submitForm()
    })
})