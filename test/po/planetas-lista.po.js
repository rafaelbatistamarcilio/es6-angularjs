const browser = require('protractor').browser;
const element = require('protractor').element;
const By = require('protractor').By;
const until = protractor.ExpectedConditions;

class PlanetasListaPO {

    async navegar() {
        await browser.get('http://localhost:3000/views/planetas/planetas-lista.html');
    }

    async getLabelTitulo() {
        return element(By.id('label-pagina-planetas'));
    }

    /** @return {Promise<ElementHelper>} */
    async getListaPlanetas() {
        return element(By.id('planetas-container')).all(By.tagName('div'));
    }

    async getInputPesquisa(){
        return element(By.id('pesquisa-planeta'));
    }

    async getBtnPesquisar(){
        return element(By.id('btn-pesquisar'));
    }

    async pesquisarPlaneta(planeta){
        const input = await this.getInputPesquisa();
        await input.sendKeys(planeta);
        const botao = await this.getBtnPesquisar();
        await botao.click();
        await browser.wait( until.presenceOf( $('#planetas-container') ), 9000);
    }

    async esperarLista() {
        await browser.wait( until.presenceOf( $('#planetas-container') ), 9000);
    }
}

module.exports = PlanetasListaPO;