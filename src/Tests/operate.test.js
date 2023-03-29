import operate from '../components/logic/operate';

describe('Testing oprate function', () => {
  test('Adding two numbers', () => {
    const sum = operate('1', '2', '+');
    expect(sum).toBe('3');
  });
  test('Substracting two numbers', () => {
    const sum = operate('1', '2', '-');
    expect(sum).toBe('-1');
  });
  test('Multiply two numbers', () => {
    const sum = operate('1', '2', 'x');
    expect(sum).toBe('2');
  });
  test('Divide two numbers', () => {
    const sum = operate('2', '1', '÷');
    expect(sum).toBe('2');
  });
  test('Modules of two numbers', () => {
    const sum = operate('2', '1', '%');
    expect(sum).toBe('0');
  });
});
