import { CategoryModule } from './category.module';

describe('CategoryModule', () => {
    let formModule: CategoryModule;

    beforeEach(() => {
        formModule = new CategoryModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
