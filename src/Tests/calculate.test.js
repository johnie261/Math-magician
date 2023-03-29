import calculate from '../components/logic/calculate';

describe('calculate', () => {
  it('should clear the calculator state when AC is pressed', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should append digits to next when a number button is pressed', () => {
    const result1 = calculate({ total: 10, next: '5', operation: '+' }, '6');
    expect(result1).toEqual({ total: 10, next: '56', operation: '+' });
  });

  it('should add decimal points when the "." button is pressed', () => {
    const result1 = calculate({ total: null, next: '5', operation: null }, '.');
    expect(result1).toEqual({ total: null, next: '5.', operation: null });

    const result2 = calculate({ total: null, next: '5.', operation: null }, '.');
    expect(result2).toEqual({ total: null, next: '5.', operation: null });

    const result3 = calculate({ total: 10, next: null, operation: '+' }, '.');
    expect(result3).toEqual({ total: 10, next: '0.', operation: '+' });
  });

  it('should perform operations when an operator button is pressed', () => {
    const result1 = calculate({ total: 10, next: '5', operation: '+' }, '-');
    expect(result1).toEqual({ total: '15', next: null, operation: '-' });

    const result2 = calculate({ total: 10, next: '5', operation: '-' }, 'x');
    expect(result2).toEqual({ total: '5', next: null, operation: 'x' });

    const result3 = calculate({ total: 10, next: '5', operation: 'x' }, '÷');
    expect(result3).toEqual({ total: '50', next: null, operation: '÷' });

    const result4 = calculate({ total: 10, next: '5', operation: '÷' }, '÷');
    expect(result4).toEqual({ total: '2', next: null, operation: '÷' });
  });

  it('should calculate the result when = is pressed', () => {
    const result1 = calculate({ total: 10, next: '5', operation: '+' }, '=');
    expect(result1).toEqual({ total: '15', next: null, operation: null });

    const result2 = calculate({ total: 10, next: '5', operation: '-' }, '=');
    expect(result2).toEqual({ total: '5', next: null, operation: null });
  });
});
