import { ClientTypeModule } from './client-type.module';

describe('ClientTypeModule', () => {
    let formModule: ClientTypeModule;

    beforeEach(() => {
        formModule = new ClientTypeModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
