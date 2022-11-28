import supertest from "supertest";
import app from "../server";

const request = supertest(app);

describe("Test main endpoint", function () {
  it("GET /api", async function () {
    const res = await request.get("/api");
    expect(res.status).toBe(200);
  });
});
