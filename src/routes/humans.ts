import { Hono } from "hono";
import { getAllHumans } from "../controllers/humans";

export const humanRoutes = new Hono();

humanRoutes.get("/", async (context) => {
  try {
    const humans = await getAllHumans();

    return context.json(
      {
        data: humans,
      },
      200
    );
  } catch (e) {
    return context.json(
      {
        error: "Internal Server Error",
      },
      500
    );
  }
});
