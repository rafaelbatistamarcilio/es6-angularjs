const browser =  require('protractor').browser;
const element =  require('protractor').element; 
const By =  require('protractor').By; 

class HomePO {

    async navegar(){
        await browser.get('http://localhost:3000/views/home.html');
    }

    async getLabelTitulo(){
        return await element(By.id('label-pagina-home'));
    }
}

module.exports = HomePO;