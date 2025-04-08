//describe();

test("Verdadeiro tem que ser verdadeiro", () => {
  const verdade = true;
  expect(true).toBe(verdade);
});

test("Soma deve ser 2", () => {
  const n1 = -2;
  const n2 = 4;
  const sum = n1 + n2;
  expect(2).toBe(sum);
});
