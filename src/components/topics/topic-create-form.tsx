"use client";

import {
  Button,
  Input,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  popover,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, { errors: {} });

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name:"
              placeholder="Name"
              labelPlacement="outside"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(",")}
            />
            <Textarea
              name="description"
              label="Description:"
              placeholder="Description"
              labelPlacement="outside"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(",")}
            />
            <div className="bg-red-200 border border-red-400 rounded p-2">
              {formState.errors._form?.join(",")}
            </div>
            <Button type="submit" color="primary">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
