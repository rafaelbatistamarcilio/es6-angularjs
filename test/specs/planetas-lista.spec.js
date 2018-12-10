const PlanetasListaPO = require('../po/planetas-lista.po');

const planetasListaPage = new PlanetasListaPO();

describe('deve acessar a página home', () => {

    it('deve achar o label "Pesquisa de Planetas do Star Wars" ', async () => {
        await planetasListaPage.navegar();
        const el = await planetasListaPage.getLabelTitulo();
        const titulo = await el.getText();
        expect(titulo).toEqual("Pesquisa de Planetas do Star Wars");
    });

    it('deve encontrar 10 planetas na lista ', async () => {
        await planetasListaPage.esperarLista();
        const elemento = await planetasListaPage.getListaPlanetas();
        expect(elemento.length).toEqual(10);
    });

    it('deve pesquisar pelo planeta Alderaan e encontrar 1 planeta na lista ', async () => {
        await planetasListaPage.pesquisarPlaneta('Alderaan');
        const elemento = await planetasListaPage.getListaPlanetas();
        expect(elemento.length).toEqual(1);

        const planeta = await elemento[0].getText();
        expect(planeta).toEqual('Alderaan');
    });
});