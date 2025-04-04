import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { humanRoutes } from "./routes/humans";

const allRoutes = new Hono();

allRoutes.get("/ping", (context) => {
  return context.json(
    {
      message: "pong",
    },
    200
  );
});

allRoutes.route("/humans", humanRoutes);

serve(allRoutes, ({ port }) => {
  console.log(`http://localhost:${port}`);
});
