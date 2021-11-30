const utilities = require('../config/utilities')

class  loginpageobjects
{
    get txtusername(){
        const txtusernamevalue =  $('[placeholder="Username"]');
        return txtusernamevalue;
    }

    get txtpassword(){
        const txtpasswordvalue =  $('[placeholder="Password"]');;
        return txtpasswordvalue; 
    }

    get btbloging(){
        const btblogingvalue =  $('[type="button"]')
        return  btblogingvalue;
    }


    get lblmynotes(){
        const lblmynotesvalue = $('[id="my-notes-page"]')
        return  lblmynotesvalue;
    }
    
    async login(user,pass)
    {
         await utilities.clickobject(this.btbloging)
         await utilities.setValueElement(this.txtusername,user)
         await utilities.setValueElement(this.txtpassword,pass)
         await utilities.clickobject(this.btbloging)
         await expect(this.lblmynotes).toBeDisplayed();
         //await utilities.waiter();
    }
}
module.exports = new loginpageobjects();