import { SourceModule } from './source.module';

describe('SourceModule', () => {
    let formModule: SourceModule;

    beforeEach(() => {
        formModule = new SourceModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
