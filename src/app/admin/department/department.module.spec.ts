import { DepartmentModule } from './department.module';

describe('DepartmentModule', () => {
    let formModule: DepartmentModule;

    beforeEach(() => {
        formModule = new DepartmentModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
