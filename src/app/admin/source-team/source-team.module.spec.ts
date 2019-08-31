import { SourceTeamModule } from './source-team.module';

describe('SourceTeamModule', () => {
    let formModule: SourceTeamModule;

    beforeEach(() => {
        formModule = new SourceTeamModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
