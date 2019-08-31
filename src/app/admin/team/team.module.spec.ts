import { TeamModule } from './team.module';

describe('TeamModule', () => {
    let formModule: TeamModule;

    beforeEach(() => {
        formModule = new TeamModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
