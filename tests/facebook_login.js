module.exports = {
    'Facebook Login Test':function(browser){
    browser
    .url("https://www.facebook.com/")
    .waitForElementVisible('body',1000)

    //enter Email and Password:
    .setValue('input#email','hindhumathi1999@gmail.com')
    .setValue('input#pass','Hinthu@123')

    //click the login button:
    .click('button[type="submit"]')

   // .end();

    },
};