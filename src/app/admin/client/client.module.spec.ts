import { ClientModule } from './client.module';

describe('ClientModule', () => {
    let formModule: ClientModule;

    beforeEach(() => {
        formModule = new ClientModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
