import { ApproverModule } from './approver.module';

describe('ApproverModule', () => {
    let formModule: ApproverModule;

    beforeEach(() => {
        formModule = new ApproverModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
