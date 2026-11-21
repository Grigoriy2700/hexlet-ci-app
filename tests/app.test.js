const { setupStrapi, cleanupStrapi } = require("./helpers/strapi.js");

beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await cleanupStrapi();
});

it("strapi is s", () => {
  expect(strapi).toBeDefined(); // eslint-disable-line
});

//defined
