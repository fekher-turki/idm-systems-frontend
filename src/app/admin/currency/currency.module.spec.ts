import { CurrencyModule } from './currency.module';

describe('CurrencyModule', () => {
    let formModule: CurrencyModule;

    beforeEach(() => {
        formModule = new CurrencyModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
