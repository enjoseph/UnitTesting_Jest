const { add, subtract, divide , multiply } = require("./operations");

describe("add function", () => {

  test('Checks if the add function has a definition' , () => { 
    expect(add).toBeDefined()
  })

  test("Positive Value ", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("Negative and Positive Value ", () => {
    expect(add(-5, 3)).toBe(-2);
  });


  test("Negative and Negative Value ", () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test("Positive percentile and Positive Value ", () => {
    expect(add(5.5, 3)).toBe(8.5);
  });

  test("Positive percentile and Negative Value ", () => {
    expect(add(5.5, -3)).toBe(2.5);
  });
  test(" Poisitve percentile and  Poisitve  percentile Value ", () => {
    expect(add(5.5, 3.3)).toBeCloseTo(8.8);
  });

  test(" Poisitve percentile and Negative percentile Value ", () => {
    expect(add(5.5, -3.3)).toBeCloseTo(2.2);
  });

  test(" Negative  percentile and Negative percentile Value ", () => {
    expect(add(-5.5, -3.3)).toBeCloseTo(-8.8);
  });

  test(" Adding two same numbers, one negative percentile and the other positive percentile ", () => {
    expect(add(3.3, -3.3)).toBeCloseTo(0);
  });

  test("Adding two same numbers, one negative and the other positive", () => {
    expect(add(-1, 1)).toBe(0);
  });
});

describe("subtract  function", () => {

  test('Checks if the subtract function has a definition' , () => { 
    expect(subtract).toBeDefined()
  })

  test("Positive and Positive value ", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("Negative and Positive value ", () => {
    expect(subtract(-5, 3)).toBe(-8);
  });

  test("Negative and Negative value ", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("Subtract two identical numbers, one negative and one positive.", () => {
    expect(subtract(-5, 5)).toBe(-10);
  });

  test(" Poisitve percentile and Poisitve percentile Value", () => {
    expect(subtract(0.5, 0.5)).toBe(0);
  });

  test(" negative percentile and negative percentile Value", () => {
    expect(subtract(-0.5, -0.5)).toBe(0);
  });
});

describe("divide function", () => {

  test('Checks if the divide function has a definition' , () => { 
    expect(divide).toBeDefined()
  })

  test("Integer Divisible Positive Numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });

  test("Positive and Negative Values", () => {
    expect(divide(6, -3)).toBe(-2);
  });

  test("Numbers That Are Not Exactly Divisible", () => {
    expect(divide(6, 5)).toBeCloseTo(1.2);
  });

  test("Decimal Values That Are Not Fully Divisible", () => {
    expect(divide(5, 3)).toBeCloseTo(1.67);
  });

  test("Dividing by Zero Should Return Infinity", () => {
    expect(divide(10, 0)).toBe(NaN);
  });

  test("Dividing Zero by Any Number Should Return 0", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("Dividing Zero by Zero Should Return NaN", () => {
    expect(divide(0, 0)).toBeNaN();
  });

  test("Decimal Dividing by Zero Should Return 0", () => {
    expect(divide(0.5, 0)).toBeNaN();
  });

  test("Decimal Dividing Zero by Any Number Should Return 0", () => {
    expect(divide(0, 2.5)).toBe(0);
  });

  test("Decimal Dividing Zero by Zero Should Return NaN", () => {
    expect(divide(0, 0.0)).toBeNaN();
  });
});

describe("multiply function", () => {

  test('Checks if the multiply function has a definition' , () => { 
    expect(multiply).toBeDefined()
  })

  test("Positive Values", () => {
    expect(multiply(5, 3)).toBe(15);
  });

  test("Negative and Positive Values", () => {
    expect(multiply(-5, 3)).toBe(-15);
  });

  test("Negative and Negative Values", () => {
    expect(multiply(-5, -3)).toBe(15);
  });

  test("Decimal and Positive Values", () => {
    expect(multiply(5.5, 3)).toBeCloseTo(16.5);
  });

  test("Decimal and Negative Values", () => {
    expect(multiply(5.5, -3)).toBeCloseTo(-16.5);
  });

  test("Decimal and Decimal Values", () => {
    expect(multiply(5.5, 3.3)).toBeCloseTo(18.15);
  });

  test("Decimal and Negative Decimal Values", () => {
    expect(multiply(5.5, -3.3)).toBeCloseTo(-18.15);
  });

  test("Negative Decimal and Negative Decimal Values", () => {
    expect(multiply(-5.5, -3.3)).toBeCloseTo(18.15);
  });

  test("Multiplying by Zero Should Return 0", () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test("Decimal Multiplying by Zero Should Return 0", () => {
    expect(multiply(0.5, 0)).toBe(0);
  });
  
});


//Fixed