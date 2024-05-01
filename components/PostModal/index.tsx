"use client";

import { Fragment, forwardRef, useImperativeHandle, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { Icons } from "@app/components";

type PostModalPropTypes = {};

const PostModal: React.ForwardRefRenderFunction<
  PostModalRefTypes,
  PostModalPropTypes
> = ({}, ref) => {
  const [isOpen, setIsOpen] = useState(false);

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
              <Dialog.Panel className="2xl:w-2/5 2xl:h-[790px] xl:w-[568px] xl:h-[611px] bg-white text-left transition-all rounded-xl shadow-md">
                <div className="flex flex-col">
                  <div className="flex items-center justify-center py-2 font-semibold text-base leading-6 border-b border-gray-300">
                    Yeni gönderi oluştur
                  </div>
                  <div className="flex flex-col 2xl:h-[790px] xl:h-[611px] items-center justify-center gap-4">
                    <Icons.Post />
                    <div className="text-xl leading-6">
                      Fotoğrafları ve videoları buraya sürükle
                    </div>
                    <button className="bg-sky-500 rounded-lg px-4 py-2 text-sm text-white font-semibold leading-4 mt-2">
                      Bilgisayardan seç
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default forwardRef(PostModal);
