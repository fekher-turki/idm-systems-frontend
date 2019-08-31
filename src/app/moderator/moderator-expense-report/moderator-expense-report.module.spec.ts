import { ModeratorExpenseReportModule } from './moderator-expense-report.module';

describe('ModeratorExpenseReportModule', () => {
    let formModule: ModeratorExpenseReportModule;

    beforeEach(() => {
        formModule = new ModeratorExpenseReportModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
