import { PiletApi } from 'portal';
import { CalculatorTile } from './calculatorTile';
import { CalculatorSettings } from './calculatorSettings';

export function setup(app: PiletApi) {
  console.log('Hi from the calculator');

  app.registerTile(CalculatorTile, {
    initialColumns: 8,
    initialRows: 3,
  });
  app.registerPage('/calculator/settings', CalculatorSettings);
}
