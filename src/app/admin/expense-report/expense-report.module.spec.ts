import { ExpenseReportModule } from './expense-report.module';

describe('ExpenseReportModule', () => {
    let formModule: ExpenseReportModule;

    beforeEach(() => {
        formModule = new ExpenseReportModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
