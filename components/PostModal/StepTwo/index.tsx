"use client";

import React from "react";
import Image from "next/image";

import { useFormContext } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { Icons, Form as FormComponent, Button } from "@app/components";
import { api } from "@app/hooks";

type StepTwoPropTypes = {
  closeModal: () => void;
};

const StepTwo: React.FC<StepTwoPropTypes> = ({ closeModal }) => {
  const { handleSubmit, reset, watch } = useFormContext<IPostFormType>();

  const queryClient = useQueryClient();
  const { mutate: createPostMutate } = api.useCreatePost({
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["useGetPosts"] });
      }, 500);
    },
  });

  const onSubmit = (data: IPostFormType) => {
    createPostMutate(data);
    closeModal();
    reset();
  };

  const imageWatch = watch("image");
  const stepWatch = watch("step");

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between py-2 px-4 border-b border-gray-300">
        <Icons.ArrowLeft
          className="cursor-pointer"
          onClick={() => reset({ step: stepWatch - 1 })}
        />
        <div className="font-semibold text-base leading-6">
          Yeni gönderi oluştur
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          title="Paylaş"
          className="flex text-sm leading-5 text-sky-500 hover:text-blue-950 font-semibold cursor-pointer"
        />
      </div>
      <div className="flex flex-row 2xl:h-[749px] xl:h-[570px] w-full">
        <div className="w-4/6 border-r border-gray-300">
          <Image
            width={0}
            height={0}
            alt="image"
            src={imageWatch}
            style={{
              width: "100%",
              height: "100%",
            }}
            className="object-cover rounded-bl-xl"
          />
        </div>
        <div className="flex flex-col py-5 w-2/6">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-3 px-4">
              <Image
                height={35}
                width={35}
                alt="palace"
                src="/house.png"
                className="rounded-full"
              />
              <div className="text-sm leading-5 font-semibold">
                sapphiresiren
              </div>
            </div>
            <FormComponent.Textarea
              name="description"
              placeholder="Açıklama yaz..."
              className="w-full 2xl:h-40 resize-none focus:outline-none placeholder:text-base placeholder: placeholder:text-gray-100 px-4"
            />
            <div className="flex flex-row items-center justify-between px-4 pb-3 border-b border-gray-300">
              <Icons.SmileFace className="w-5 h-5 text-gray-400 cursor-pointer" />
              <div className="text-xs leading-4 text-gray-100 cursor-pointer">
                0/2.200
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row px-4 py-3 items-center align-center justify-between border-b border-gray-300">
              <div className="text-gray-400 text-base leading-5">
                Konum ekle
              </div>
              <Icons.Location />
            </div>
            <div className="flex flex-row px-4 py-3 items-center align-center justify-between border-b border-gray-300 cursor-pointer">
              <div className="text-base leading-5">Erişilebilirlik</div>
              <Icons.ArrowBottom />
            </div>
            <div className="flex flex-row px-4 py-3 items-center align-center justify-between border-b border-gray-300 cursor-pointer">
              <div className="text-base leading-5">Gelişmiş ayarlar</div>
              <Icons.ArrowBottom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
