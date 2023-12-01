"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface issue {
  title: string;
  description: string;
}
const createNewIssue = () => {
  const { register, control, handleSubmit } = useForm<issue>();
  const router = useRouter();
  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Submit New issue</Button>
    </form>
  );
};

export default createNewIssue;
