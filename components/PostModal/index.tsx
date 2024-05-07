"use client";

import Image from "next/image";

import { Fragment, forwardRef, useImperativeHandle, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";

import { Icons, Form as FormComponent } from "@app/components";

type PostModalPropTypes = {
  post: PostType;
};

const PostModal: React.ForwardRefRenderFunction<
  PostModalRefTypes,
  PostModalPropTypes
> = ({ post }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const useFormMethods = useForm<IPostFormType>({
    defaultValues: {
      description: "",
      image: "",
    },
  });

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

    //sayfa2
    // <Transition appear show={isOpen} as={Fragment}>
    //   <Dialog as="div" className="relative z-10" onClose={closeModal}>
    //     <Transition.Child
    //       as={Fragment}
    //       enter="ease-out duration-300"
    //       enterFrom="opacity-0"
    //       enterTo="opacity-100"
    //       leave="ease-in duration-200"
    //       leaveFrom="opacity-100"
    //       leaveTo="opacity-0"
    //     >
    //       <div className="fixed inset-0 bg-black/60" />
    //     </Transition.Child>
    //     <div className="fixed inset-0 overflow-y-auto">
    //       <div className="flex min-h-full items-center justify-center p-4 text-center">
    //         <Transition.Child
    //           as={Fragment}
    //           enter="ease-out duration-300"
    //           enterFrom="opacity-0 scale-95"
    //           enterTo="opacity-100 scale-100"
    //           leave="ease-in duration-200"
    //           leaveFrom="opacity-100 scale-100"
    //           leaveTo="opacity-0 scale-95"
    //         >
    //           <Dialog.Panel className="2xl:w-1/2 2xl:h-[790px] xl:w-[1088px] xl:h-[611px] bg-white text-left transition-all rounded-xl shadow-md">
    //             <div className="flex flex-col">
    //               <div className="flex flex-row justify-between py-2 px-4 border-b border-gray-300">
    //                 <Icons.ArrowLeft />
    //                 <div className=" font-semibold text-base leading-6">
    //                   Yeni gönderi oluştur
    //                 </div>
    //                 <div className="flex text-sm leading-5 text-sky-500 hover:text-blue-950 font-semibold cursor-pointer">
    //                   Paylaş
    //                 </div>
    //               </div>
    //               <div className="flex flex-row 2xl:h-[749px] xl:h-[570px] w-full">
    //                 <div className="w-4/6 border-r border-gray-300">FOTO</div>
    //                 <div className="flex flex-col py-5 w-2/6">
    //                   <div className="flex flex-col gap-5">
    //                     <div className="flex flex-row items-center gap-3 px-4">
    //                       <Image
    //                         height={35}
    //                         width={35}
    //                         alt="palace"
    //                         src="/house.png"
    //                         className="rounded-full"
    //                       />
    //                       <div className="text-sm leading-5 font-semibold">
    //                         sapphiresiren
    //                       </div>
    //                     </div>
    //                     <FormProvider {...useFormMethods}>
    //                       <FormComponent.Textarea
    //                         name="description"
    //                         placeholder="Açıklama yaz..."
    //                         className="w-full 2xl:h-40 resize-none focus:outline-none placeholder:text-base placeholder: placeholder:text-gray-100 px-4"
    //                       ></FormComponent.Textarea>
    //                     </FormProvider>
    //                     <div className="flex flex-row items-center justify-between px-4 pb-3 border-b border-gray-300">
    //                       <Icons.SmileFace className="w-5 h-5 text-gray-400 cursor-pointer" />
    //                       <div className="text-xs leading-4 text-gray-100 cursor-pointer">
    //                         0/2.200
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex flex-col">
    //                     <div className="flex flex-row px-4 py-3 items-center align-center justify-between border-b border-gray-300">
    //                       <div className="text-gray-400 text-base leading-5">
    //                         Konum ekle
    //                       </div>
    //                       <Icons.Location />
    //                     </div>
    //                     <div className="flex flex-row px-4 py-3 items-center align-center justify-between border-b border-gray-300 cursor-pointer">
    //                       <div className="text-base leading-5">
    //                         Erişilebilirlik
    //                       </div>
    //                       <Icons.ArrowBottom />
    //                     </div>
    //                     <div className="flex flex-row px-4 py-3 items-center align-center justify-between border-b border-gray-300 cursor-pointer">
    //                       <div className="text-base leading-5">
    //                         Gelişmiş ayarlar
    //                       </div>
    //                       <Icons.ArrowBottom />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </Dialog.Panel>
    //         </Transition.Child>
    //       </div>
    //     </div>
    //   </Dialog>
    // </Transition>
  );
};

export default forwardRef(PostModal);
