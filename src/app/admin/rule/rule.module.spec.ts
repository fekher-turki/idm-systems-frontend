import { RuleModule } from './rule.module';

describe('RuleModule', () => {
    let formModule: RuleModule;

    beforeEach(() => {
        formModule = new RuleModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
