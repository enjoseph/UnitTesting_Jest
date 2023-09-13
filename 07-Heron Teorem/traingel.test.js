const { calcArea } = require('./traingel');

test('Correctly calculates the area of a valid triangle', () => {
    const a = 5;
    const b = 6;
    const c = 7;
    const expectedArea = 14.7; 

    const area = calcArea(a, b, c);
    expect(area).toBeCloseTo(expectedArea); 
});

test('Throws error for negative or zero side lengths', () => {
    expect(() => calcArea(-1, 2, 3)).toThrow();
    expect(() => calcArea(1, 0, 3)).toThrow();
    expect(() => calcArea(1, 2, -3)).toThrow();
});

test('Throws error for invalid side lengths', () => {
    expect(() => calcArea(1, 2, 5)).toThrow();
});
