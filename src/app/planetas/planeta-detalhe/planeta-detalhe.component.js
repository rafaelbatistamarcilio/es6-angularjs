import * as template from './planeta-detalhe.component.html';

class PlanetaDetalheController {
            
    $onInit() {
    }
}

export const PlanetaDetalheComponent = {
    template,
    controller: PlanetaDetalheController,
    bindings: {
        planeta: '='
    }
};