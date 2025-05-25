import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TechnologyShowcaseSection = () => {
  return (
    <Card className="flex flex-col items-center gap-[15px] px-[15px] py-[39px] border border-solid border-[#ffffff80] bg-transparent text-white">
      <CardContent className="p-0 w-full">
        <div className="flex flex-col items-center gap-[15px]">
          <h2 className="w-full [font-family:'Rubik',Helvetica] font-bold text-white text-4xl text-center tracking-[0] leading-[normal]">
            АЛСЫН ХАРАА
          </h2>
          <div className="w-[244px] h-0.5 bg-[#e88524]" />
        </div>

        <p className="mt-[15px] [font-family:'Rubik',Helvetica] font-normal text-white text-base tracking-[0] leading-[35px]">
          БИД МОНГОЛДОО ЭХЭЛЖ, ДЭЛХИЙН ХЭМЖЭЭНД ХҮРЭЭГЭЭ ТЭЛЭХ ЗОРИЛГОТОЙ. ҮҮНИЙ
          ХҮРЭЭНД БИД БАРАА МАТЕРИАЛЫН МЕНЕЖМЕНТЭД ШИНЭЧЛЭЛ АВЧРАХ, БИЗНЕСҮҮДИЙГ
          ЧАДАВХЖУУЛАХ, ТОГТВОРТОЙ ИННОВАЦИ, ӨСӨЛТИЙГ ДЭМЖИХ RFID ШИЙДЛҮҮДИЙН
          ТЭРГҮҮЛЭГЧ НЬ БОЛОХЫГ ЗОРЬЖ БАЙНА.
        </p>
      </CardContent>
    </Card>
  );
};
