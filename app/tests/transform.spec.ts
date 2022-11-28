import { transform } from "../utils";

describe("Test image processing", function () {
  it("transform image", async function () {
    const image = await transform("encenadaport", "400", "400");
    expect(image).toBeInstanceOf(Buffer);
  });
});
