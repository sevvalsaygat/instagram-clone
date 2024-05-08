"use client";

import React, {
  Fragment,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

import { Dialog, Transition } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import cn from "classnames";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

type PostModalPropTypes = {};

const PostModal: React.ForwardRefRenderFunction<
  PostModalRefTypes,
  PostModalPropTypes
> = ({}, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const useFormMethods = useForm<IPostFormType>({
    defaultValues: {
      description: "",
      image: "",
      step: 1,
    },
  });

  const { watch } = useFormMethods;
  const stepWatch = watch("step");

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    };
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={cn(
                  "2xl:h-[790px] xl:h-[611px] bg-white text-left transition-all rounded-xl shadow-md",
                  {
                    "2xl:w-2/5 xl:w-[568px]": stepWatch === 1,
                    "2xl:w-1/2 xl:w-[1088px]": stepWatch === 2,
                  }
                )}
              >
                <FormProvider {...useFormMethods}>
                  {stepWatch === 1 ? (
                    <StepOne />
                  ) : (
                    <StepTwo closeModal={closeModal} />
                  )}
                </FormProvider>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default forwardRef(PostModal);
