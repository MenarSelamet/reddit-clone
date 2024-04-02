import {
  Button,
  Input,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  popover,
} from "@nextui-org/react";

export default function TopicCreateForm() {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-0.5">
          <form>
            <Input placeholder="Title" />
            <Textarea placeholder="Content" />
            <Button type="submit" color="primary">
              Create
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
