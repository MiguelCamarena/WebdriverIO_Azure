class utilities{

    async clickobject(element)
    {
        await element;
        await expect(element).toBeClickable();
        await element.click(); 
    }


    async setValueElement(element,value)
    {
        await element;
        await expect(element).toBeDisplayed();
        await element.setValue(value); 
    }

    async waiter(){
        await browser.executeAsync((done) => {
            setTimeout(done, 500)
        })
    }

    async forceClick(element)
    {   
        console.log("Element is an Object")
        browser.execute(element.toString()+".click();")
        console.log(element.toString())
        console.log("Element is an Object")
    }

    async debugElement(element){
        if(typeof element === "object"){
            console.log("Element is an Object")
            for(let object in element)
            console.log("simon " + object + " simon")
            
        }
    }

}
module.exports = new utilities();