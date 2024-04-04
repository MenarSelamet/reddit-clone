"use server";

import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letter or dashes without spaces",
    }),
  description: z.string().min(10),
});

export async function createTopic(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;

  console.log(name, description);
}

//TODO: revalidate the homepage
