import { EmployeeModule } from './employee.module';

describe('EmployeeModule', () => {
    let formModule: EmployeeModule;

    beforeEach(() => {
        formModule = new EmployeeModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
