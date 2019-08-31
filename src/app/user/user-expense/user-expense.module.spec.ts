import { ExpenseModule } from './user-expense.module';

describe('ExpenseModule', () => {
    let formModule: ExpenseModule;

    beforeEach(() => {
        formModule = new ExpenseModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
