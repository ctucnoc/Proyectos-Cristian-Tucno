import { ConverBooleanToStringPipe } from '../shared/pipes/conver-boolean-to-string.pipe';

describe('ConverBooleanToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ConverBooleanToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
