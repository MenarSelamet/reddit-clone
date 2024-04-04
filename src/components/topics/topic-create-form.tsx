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

export default function TopicCreateForm() {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="title"
              label="Title:"
              placeholder="Title"
              labelPlacement="outside"
            />
            <Textarea
              name="description"
              label="Description:"
              placeholder="Content"
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