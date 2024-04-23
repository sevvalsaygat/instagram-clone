"use client";

import { useRouter } from "next/navigation";

import { useForm, FormProvider } from "react-hook-form";

import { Button, Form as FormComponent } from "@app/components";
import { api } from "@app/hooks";

type FormPropTypes = {};

const Form: React.FC<FormPropTypes> = () => {
  const useFormMethods = useForm<IPostFormType>({
    defaultValues: {
      description: "",
      image: "",
    },
  });

  const router = useRouter();

  const { handleSubmit, reset } = useFormMethods;

  const { mutate: createPostMutate } = api.useCreatePost({});

  const onSubmit = (data: IPostFormType) => {
    createPostMutate(data);
    reset();
    router.push("/");
  };

  return (
    <div>
      <FormProvider {...useFormMethods}>
        <FormComponent.Input
          name="description"
          label="Description"
          variant="primary"
        ></FormComponent.Input>
        <div>
          <FormComponent.FileInput
            name="image"
            variant="primary"
            label="Image"
            rules={{
              required: "This field is required",
            }}
            accept="image/*"
          />
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="primary"
          title="Create"
        />
      </FormProvider>
    </div>
  );
};

export default Form;
