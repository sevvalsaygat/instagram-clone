import React from "react";
import Image from "next/image";

type SuggestionsPropTypes = {};

const SUGGESTIONS_BY_OPTIONS: Array<{
  image: JSX.Element;
  nickname: string | JSX.Element;
  description: string | JSX.Element;
  button: string | JSX.Element;
}> = [
  {
    image: (
      <Image
        height={47}
        width={47}
        alt="hat"
        src="/hat.png"
        className="rounded-full cursor-pointer"
      />
    ),
    nickname: (
      <div className="text-sm leading-4 font-semibold cursor-pointer">
        serenewhisper
      </div>
    ),
    description: (
      <div className="text-xs leading-4 text-gray-400">
        Senin için öneriliyor
      </div>
    ),
    button: (
      <button className="flex items-center text-xs leading-4 text-sky-500 hover:text-blue-950 font-semibold cursor-pointer">
        Takip et
      </button>
    ),
  },
  {
    image: (
      <Image
        height={47}
        width={47}
        alt="sea"
        src="/sea.png"
        className="rounded-full cursor-pointer"
      />
    ),
    nickname: (
      <div className="text-sm leading-4 font-semibold cursor-pointer">
        dreamydaze
      </div>
    ),
    description: (
      <div className="xl:max-w-[160px] 2xl:max-w-[180px] text-xs leading-4 text-gray-400 truncate">
        StellarSynapse + 7 kişi takip ediyor
      </div>
    ),
    button: (
      <button className="flex items-center text-xs leading-4 text-sky-500 hover:text-blue-950 font-semibold cursor-pointer">
        Takip et
      </button>
    ),
  },
  {
    image: (
      <Image
        height={47}
        width={47}
        alt="palace"
        src="/palace.png"
        className="rounded-full cursor-pointer"
      />
    ),
    nickname: (
      <div className="text-sm leading-4 font-semibold cursor-pointer">
        sapphiresiren
      </div>
    ),
    description: (
      <div className="text-xs leading-4 text-gray-400">
        Senin için öneriliyor
      </div>
    ),
    button: (
      <button className="flex items-center text-xs leading-4 text-sky-500 hover:text-blue-950 font-semibold cursor-pointer">
        Takip et
      </button>
    ),
  },
  {
    image: (
      <Image
        height={47}
        width={47}
        alt="wedding"
        src="/wedding.png"
        className="rounded-full cursor-pointer"
      />
    ),
    nickname: (
      <div className="text-sm leading-4 font-semibold cursor-pointer">
        whisperingwillow
      </div>
    ),
    description: (
      <div className="xl:max-w-[160px] 2xl:max-w-[180px] text-xs leading-4 text-gray-400 truncate">
        NeonNebula + 3 kişi takip ediyor
      </div>
    ),
    button: (
      <button className="flex items-center text-xs leading-4 text-sky-500 hover:text-blue-950 font-semibold cursor-pointer">
        Takip et
      </button>
    ),
  },
];

const Suggestions: React.FC<SuggestionsPropTypes> = () => {
  return (
    <div className="2xl:w-2/3 mt-2 w-full">
      <div className="flex flex-row justify-between mb-6">
        <div className="flex flex-row gap-3 items-center">
          <Image
            height={47}
            width={47}
            alt="house"
            src="/house.png"
            className="rounded-full bg-white p-0.5"
          />
          <div className="flex flex-col gap-1">
            <div className="text-sm leading-4 font-semibold cursor-pointer">
              sapphiresiren
            </div>
            <div className="text-sm leading-4 text-gray-400">Serena</div>
          </div>
        </div>
        <div className="flex items-center text-xs leading-4 text-sky-500 hover:text-blue-950 font-semibold cursor-pointer">
          Geçiş Yap
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between mb-3">
          <div className="text-sm text-gray-400 font-semibold">
            Senin için önerilenler
          </div>
          <div className="text-xs font-semibold hover:text-gray-400 cursor-pointer">
            Tümünü Gör
          </div>
        </div>
        {SUGGESTIONS_BY_OPTIONS.map(
          ({ image, nickname, description, button }, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex flex-row gap-3 items-center mb-3">
                  {image}
                  <div className="flex flex-col">
                    {nickname}
                    {description}
                  </div>
                </div>
                {button}
              </div>
            );
          }
        )}
      </div>
      <div className="flex flex-col mt-6">
        <div className="flex flex-row gap-1">
          <div className="text-xs text-gray-100">Hakkında .</div>
          <div className="text-xs text-gray-100">Yardım .</div>
          <div className="text-xs text-gray-100">Basın .</div>
          <div className="text-xs text-gray-100">API .</div>
          <div className="text-xs text-gray-100">İş Fırsatları</div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="text-xs leading-4 text-gray-100">Gizlilik .</div>
          <div className="text-xs leading-4 text-gray-100">Koşullar .</div>
          <div className="text-xs leading-4 text-gray-100">Konumlar .</div>
          <div className="text-xs leading-4 text-gray-100">Dil .</div>
          <div className="text-xs leading-4 text-gray-100">Meta Verified</div>
        </div>
        <div className="text-xs leading-4 text-gray-100 mt-6">
          © 2024 INSTAGRAM FROM META
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
