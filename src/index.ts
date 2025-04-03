import { serve } from "@hono/node-server";
import { Hono } from "hono";

const allRoutes = new Hono();

allRoutes.get("", (context) => {
  return context.json(
    {
      message: "Hello, World",
    },
    200
  );
});

allRoutes.get("/ping", (context) => {
  return context.json(
    {
      message: "Pong",
    },
    200
  );
});

serve(allRoutes, ({ port }) => {
  console.log(`http://localhost:${port}`);
});
