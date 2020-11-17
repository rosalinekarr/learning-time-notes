const FACES = ["🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚"];

const getCurrentClock = () => {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  return FACES[hour % 12];
};

describe("#getCurrentClock", () => {
  it("returns 🕛 for 'Tue Mar 24 2015 00:00:00'", () => {
    const testDate = new Date("Tue Mar 24 2015 00:00:00");
    jest.spyOn(global, 'Date').mockImplementation(() => testDate);
    expect(getCurrentClock()).toEqual("🕛");
  })
});
