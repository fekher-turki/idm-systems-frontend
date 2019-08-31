import { RequesterTeamModule } from './requester-team.module';

describe('RequesterTeamModule', () => {
    let formModule: RequesterTeamModule;

    beforeEach(() => {
        formModule = new RequesterTeamModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
