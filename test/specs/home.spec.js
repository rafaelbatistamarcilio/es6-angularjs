const HomePO = require('../po/home.po');
const homePage = new HomePO();

describe('deve acessar a página home', () => {

    it('deve achar o label "Bem vindo" ', async () => {
        await homePage.navegar();
        const el = await homePage.getLabelTitulo();
        const titulo = await el.getText();
        console.log('texto: '+ titulo);
        expect(titulo).toEqual("Bem vindo");
    });
});