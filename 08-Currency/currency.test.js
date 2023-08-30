const {convertCurrency} = require('./currency');

describe('convertCurrency function', () => {
    test('Correctly converts currency using exchange rate', () => {
        const currency = 100;
        const exchangeRate = 1.70;
        const expectedConversion = 170;

        const result = convertCurrency(currency, exchangeRate);
        expect(result).toBe(expectedConversion);
    });

    test('Throws error for non-numeric currency or exchange rate', () => {
        expect(() => convertCurrency('100', 1.70)).toThrow();
        expect(() => convertCurrency(100, '1.70')).toThrow();
        expect(() => convertCurrency('100', '1.70')).toThrow();
    });

    test('Throws error for currency and exchange rate being both zero', () => {
        expect(() => convertCurrency(0, 0)).toThrow();});

    test('Returns 0 when currency is 0', () => {
        const currency = 0;
        const exchangeRate = 1.70;

        const result = convertCurrency(currency, exchangeRate);
        expect(result).toBe(0);
    });

    test('Returns 0 when exchange rate is 0', () => {
        const currency = 100;
        const exchangeRate = 0;

        const result = convertCurrency(currency, exchangeRate);
        expect(result).toBe(0);
    });

    test('Returns NaN when currency or exchange rate is NaN', () => {
        const currency = NaN;
        const exchangeRate = 1.70;

        const result = convertCurrency(currency, exchangeRate);
        expect(result).toBeNaN();
    });
});
