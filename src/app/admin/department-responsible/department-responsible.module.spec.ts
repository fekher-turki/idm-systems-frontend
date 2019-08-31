import { DepartmentResponsibleModule } from './department-responsible.module';

describe('DepartmentResponsibleModule', () => {
    let formModule: DepartmentResponsibleModule;

    beforeEach(() => {
        formModule = new DepartmentResponsibleModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
