describe("#toUpperCase", () => {
  it("returns '' for ''", () => {
    const testCase = "";
    expect(testCase.toUpperCase()).toEqual("");
  });

  it("returns 'HELLO WORLD' for 'hello world'", () => {
    const testCase = "hello world";
    expect(testCase.toUpperCase()).toEqual("HELLO WORLD");
  });

  it("returns 'SENTENCE WHICH IS ALREADY UPPERCASE' for 'SENTENCE WHICH IS ALREADY UPPERCASE'", () => {
    const testCase = "SENTENCE WHICH IS ALREADY UPPERCASE";
    expect(testCase.toUpperCase()).toEqual("SENTENCE WHICH IS ALREADY UPPERCASE");
  });

  it("returns 'SÉNTËNCE WITH LÓTS OF ODD CHARACTERS. 🙂' for 'Séntënce with lóts of odd characters. 🙂'", () => {
    const testCase = "Séntënce with lóts of odd characters. 🙂";
    expect(testCase.toUpperCase()).toEqual("SÉNTËNCE WITH LÓTS OF ODD CHARACTERS. 🙂");
  });
});
