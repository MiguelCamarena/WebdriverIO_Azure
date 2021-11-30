
const config = require('../config/config')
const loginpage = require('../pageobjects/login.page')


describe("login access -  test verfication", ()=>{
    it("login", async()=>{
        await browser.url(config.url);   
        await loginpage.login(config.user,config.pass);      
    })


      
});