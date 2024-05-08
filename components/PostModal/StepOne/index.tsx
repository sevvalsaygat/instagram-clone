"use client";

import React from "react";

import { useFormContext } from "react-hook-form";

import { Icons, Form as FormComponent } from "@app/components";

type StepOnePropTypes = {};

const StepOne: React.FC<StepOnePropTypes> = () => {
  const { setValue } = useFormContext<IPostFormType>();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center py-2 font-semibold text-base leading-6 border-b border-gray-300">
        Yeni gönderi oluştur
      </div>
      <div className="flex flex-col 2xl:h-[790px] xl:h-[611px] items-center justify-center gap-4">
        <Icons.Post />
        <div className="text-xl leading-6">
          Fotoğrafları ve videoları buraya sürükle
        </div>
        <div>
          <FormComponent.FileInput
            name="image"
            placeholder="Bilgisayardan seç"
            rules={{
              required: "This field is required",
              onChange: () => {
                setValue("step", 2);
              },
            }}
            accept="image/*"
          />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
