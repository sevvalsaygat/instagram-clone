"use client";

import React from "react";

import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";

type FileInputPropTypes = {
  name: string;
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  accept?: string;
  placeholder?: string;
};

const FileInput: React.FC<FileInputPropTypes> = ({
  name,
  label,
  rules,
  accept,
  placeholder,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <React.Fragment>
      {label && (
        <label className="block text-sm ml-1 font-medium leading-6 text-purple-700">
          {label}
        </label>
      )}
      <div
        className={cn({
          "mt-2": !!label,
        })}
      >
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center cursor-pointer">
            <div className="bg-sky-500 rounded-lg px-4 py-2 text-sm text-white font-semibold leading-4 mt-2 cursor-pointer">
              {placeholder}
            </div>
            <Controller
              name={name}
              control={control}
              rules={rules}
              render={({ field }) => (
                <input
                  onChange={(e) => {
                    if (e.target.files) {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        field.onChange(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  onBlur={field.onBlur}
                  name={field.name}
                  type="file"
                  accept={accept}
                  className="hidden"
                />
              )}
            />
          </label>
        </div>
      </div>
      {fieldError && (
        <div className="fixed -mt-8 ml-2 text-rose-800 text-xs font-sans">
          {fieldError.message as string}
        </div>
      )}
    </React.Fragment>
  );
};

export default FileInput;
