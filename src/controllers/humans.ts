import type { Human } from "@prisma/client";
import { prismaClient } from "./core/prisma";

export const getAllHumans = async (): Promise<Human[]> => {
  const humans = await prismaClient.human.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return humans;
};
