import { SourceTypeModule } from './source-type.module';

describe('SourceTypeModule', () => {
    let formModule: SourceTypeModule;

    beforeEach(() => {
        formModule = new SourceTypeModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
