import { RequesterModule } from './requester.module';

describe('RequesterModule', () => {
    let formModule: RequesterModule;

    beforeEach(() => {
        formModule = new RequesterModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
