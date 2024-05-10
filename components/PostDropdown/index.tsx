"use client";

import React, { useState } from "react";

import { Menu, Transition } from "@headlessui/react";
import { useQueryClient } from "@tanstack/react-query";

import { Icons } from "@app/components";
import { api } from "@app/hooks";

type PostDropdownPropTypes = {
  post: PostType;
};

const PostDropdown: React.FC<PostDropdownPropTypes> = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { mutate: deletePostMutate } = api.useDeletePost({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useGetPosts"] });
    },
  });
  const queryClient = useQueryClient();

  return (
    <div className="relative w-52 text-right">
      <Menu>
        <Menu.Button onClick={toggleDropdown} className="inline-flex">
          <Icons.ThreePoints className="cursor-pointer" />
        </Menu.Button>
        <Transition show={isOpen}>
          <Menu.Items className="absolute z-20 ml-24 w-48 rounded-xl border border-gray-300 bg-white focus:outline-none">
            <Menu.Item>
              <button className="group flex w-full text-xs leading-5 text-black border-b border-gray-300 items-center px-4 py-3 hover:bg-gray-200 cursor-pointer transition-all duration-100 rounded-t-xl">
                Paylaş...
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="group flex w-full text-xs leading-5 text-black border-b border-gray-300 items-center px-4 py-3 hover:bg-gray-200 cursor-pointer transition-all duration-100">
                Gönderiye Git
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className="group flex w-full text-xs leading-5 text-red-400 items-center px-4 py-3 hover:bg-gray-200 cursor-pointer transition-all duration-100 rounded-b-xl"
                onClick={() => {
                  deletePostMutate({
                    id: post.id,
                  });
                }}
              >
                Gönderiyi Sil
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default PostDropdown;
