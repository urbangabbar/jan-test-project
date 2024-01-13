import { CreateAccountPage } from "../pages/create-account"
import { HomePage } from "../pages/home"

describe('Signin', () => {
  let createAccountPage
  beforeEach(()=>{
    const home = new HomePage()
    home.visit()
    home.selectCreateAccount()
    createAccountPage = new CreateAccountPage();
  })
  it.skip('Happy path', () => {
    createAccountPage.fillDeatils("abc", "bcd", "abc+22222267@gmail.com", "Jumpin@123", "Jumpin@123")
    createAccountPage.submitForm()
  })
  it.skip('Weak password', () => {
    createAccountPage.fillDeatils("abc", "bcd", "abc+22222267@gmail.com", "abcd", "abcd")
    createAccountPage.submitForm()
    createAccountPage.assertPasswordError()
  })
  it('Password & confim password should match validation', ()=> {
    createAccountPage.fillDeatils("abc", "bcd", "abc+22222267@gmail.com", "Jumpin@123", "Jumpin@124")
    createAccountPage.submitForm()
    createAccountPage.passowrdMatchError()
  })
})