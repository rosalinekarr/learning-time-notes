const fetch = require("node-fetch");

describe("#fetch", () => {
  it("returns the expected data for Dracula", async () => {
    const dracula = await fetch("http://www.gutenberg.org/cache/epub/345/pg345.txt").then(res => res.text());
    expect(dracula).toMatchSnapshot();
  });
});
