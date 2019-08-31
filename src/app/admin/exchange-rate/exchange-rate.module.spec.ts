import { ExchangeRateModule } from './exchangeRate.module';

describe('ExchangeRateModule', () => {
    let formModule: ExchangeRateModule;

    beforeEach(() => {
        formModule = new ExchangeRateModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
