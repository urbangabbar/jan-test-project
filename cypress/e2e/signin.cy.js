import { CreateAccountPage } from "../pages/create-account"
import { HomePage } from "../pages/home"

describe('Signin', () => {
  it.skip('Happy path', () => {
    const home = new HomePage()
    home.visit()
    home.selectCreateAccount()
    const createAccountPage = new CreateAccountPage();
    createAccountPage.fillDeatils("abc", "bcd", "abc+22222267@gmail.com", "Jumpin@123", "Jumpin@123")
    createAccountPage.submitForm()
  })
  it('Weak password', () => {
    const home = new HomePage()
    home.visit()
    home.selectCreateAccount()
    const createAccountPage = new CreateAccountPage();
    createAccountPage.fillDeatils("abc", "bcd", "abc+22222267@gmail.com", "abcd", "abcd")
    createAccountPage.submitForm()
    createAccountPage.assertPasswordError()
  })
})