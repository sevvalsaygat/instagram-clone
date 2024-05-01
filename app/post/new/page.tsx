import { NewPost as NewPostContainer } from "@app/containers";

export default function NewPost() {
  return (
    <div className="p-10 mt-10">
      <NewPostContainer.Form />
    </div>
  );
}
