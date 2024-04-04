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
            />
            <Textarea
              name="description"
              label="Description:"
              placeholder="Description"
              labelPlacement="outside"
            />
            <Button type="submit" color="primary">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
