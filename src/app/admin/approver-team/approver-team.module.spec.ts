import { ApproverTeamModule } from './approver-team.module';

describe('ApproverTeamModule', () => {
    let formModule: ApproverTeamModule;

    beforeEach(() => {
        formModule = new ApproverTeamModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
