import { CompanyModule } from './company.module';

describe('CompanyModule', () => {
    let formModule: CompanyModule;

    beforeEach(() => {
        formModule = new CompanyModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
