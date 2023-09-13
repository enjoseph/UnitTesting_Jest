const { filter } = require("./filter");

describe("Filter function", () => {

  test("Checks if the filter function has a definition", () => {
    expect(filter).toBeDefined();
  });

  test("If value outside of array is entered", () => {
    expect(() => filter("string")).toThrow();
    expect(() => filter(54)).toThrow();
    expect(() => filter(`${{}}`)).toThrow();
  });

  test("when the array is sent following all the rules", () => {
    expect(filter([10, 12, 14])).toStrictEqual([10, 12, 14]);
  });

  test("Does it work correctly in percents? ", () => {
    expect(filter([0.1, 0.2, 0.3, 2])).toStrictEqual([2]);
  });

  test('Do "if" blocks work properly?', () => {
    expect(filter([1, 2, 4 ])).not.toContain(1);
    expect(filter([0.1, 2, 4])).not.toContain(0.1);
  });
});
