import { CountdownerModule } from './countdowner.module';

describe('CountdownerModule', () => {
  let countdownerModule: CountdownerModule;

  beforeEach(() => {
    countdownerModule = new CountdownerModule();
  });

  it('should create an instance', () => {
    expect(countdownerModule).toBeTruthy();
  });
});
