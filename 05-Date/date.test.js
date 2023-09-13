const { calculateDateDifference } = require("./date"); 

describe('calculateDateDifference function', () => {
    test('Correctly calculates the difference between two dates', () => {
        const startDate = new Date('2023-08-01');
        const endDate = new Date('2023-08-10');
        const expectedDifference = 9;

        const result = calculateDateDifference(startDate, endDate);
        expect(result).toBe(expectedDifference);
    });

    test('Throws error for non-Date arguments', () => {
        expect(() => calculateDateDifference('2023-08-01', new Date())).toThrow('Both arguments must be instances of Date!');
        expect(() => calculateDateDifference(new Date(), '2023-08-10')).toThrow('Both arguments must be instances of Date!');
        expect(() => calculateDateDifference('2023-08-01', '2023-08-10')).toThrow('Both arguments must be instances of Date!');
    });

    test('Throws error for invalid date values', () => {
        expect(() => calculateDateDifference(new Date('invalid date'), new Date())).toThrow('Invalid date values!');
        expect(() => calculateDateDifference(new Date(), new Date('invalid date'))).toThrow('Invalid date values!');
    });

    test('Throws error for end date earlier than start date', () => {
        const startDate = new Date('2023-08-01');
        const endDate = new Date('2023-07-01');

        expect(() => calculateDateDifference(startDate, endDate)).toThrow('End date cannot be earlier than start date!');
    });

    test('Returns 0 when start and end dates are the same', () => {
        const sameDate = new Date('2023-08-01');

        const result = calculateDateDifference(sameDate, sameDate);
        expect(result).toBe(0);
    });

    test('Handles leap year correctly', () => {
        const startDate = new Date('2024-02-28');
        const endDate = new Date('2024-03-01');

        const result = calculateDateDifference(startDate, endDate);
        expect(result).toBe(2);
    });
});
