import angular from 'angular';
import { SharedModule } from '../shared/shared.module';
import { WizardComponent } from './wizard.component';
import { WizardPasso1Component } from './wizard-passo-1/wizard-passo-1.component';
import { WizardPasso2Component } from './wizard-passo-2/wizard-passo-2.component';
import { WizardPasso3Component } from './wizard-passo-3/wizard-passo-3.component';


export const WizardModule = angular.module('app.wizards',[SharedModule.name])
.component('appWizard', WizardComponent)
.component('appWizardPasso1', WizardPasso1Component)
.component('appWizardPasso2', WizardPasso2Component)
.component('appWizardPasso3', WizardPasso3Component);