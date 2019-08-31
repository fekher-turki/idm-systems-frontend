import { CountryModule } from './country.module';

describe('CountryModule', () => {
    let formModule: CountryModule;

    beforeEach(() => {
        formModule = new CountryModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
