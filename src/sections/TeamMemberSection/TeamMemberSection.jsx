import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamMembersSection = () => {
  const testimonials = [
    {
      company: "ТООНОТ БЭЛЧИР ТУР ХХК:",
      quote:
        '"chipmo-ийн анхны үйлчлүүлэгчийн хувьд бид тэдний нэвтрүүлсэн буй шинэ үеийн аюулгүй байдлын шийдэл болон бодит цагийн горимоор хянах чадвартай системд сэтгэл хангалуун байдаг."',
      image: "https://c.animaapp.com/mb1tqu2qejSwiZ/img/image-327.png",
    },
    {
      company: "УБТЗ ХНН:",
      quote:
        '"CHIPMO систем нь цагаан хэрэглэлийн хяналтыг мэдэгдэхүйц сайжруулж, бидний өдөр тутмын гар ажиллагаатай төвөгтэй үйл ажиллагааг эрс сайжруулсан багасгасан."',
      image: "https://c.animaapp.com/mb1tqu2qejSwiZ/img/image-204.png",
    },
    {
      company: "СБД НДГ:",
      quote:
        '"RFID-д суурилсан DIGITAL лавлагааны системийг нэвтрүүлсэнээр манай Архивын менежментийн үйл явцыг сайжруулж, хүн бүрийн цагийг хэмнэдэг болгосон."',
      image: "https://c.animaapp.com/mb1tqu2qejSwiZ/img/image-205.png",
    },
    {
      company: "ОЧ кидс стор:",
      quote:
        '"RFID технологи нь бидний ложистикийн үйл ажиллагааг сайжруулж, үр ашиг болон хэрэглэгчийн сэтгэл ханамжийг нэмэгдүүлсэн. Манай ажилчид ч системийг ашиглахад хялбархан байдагт талархдаг.',
      image: "https://c.animaapp.com/mb1tqu2qejSwiZ/img/group-442.png",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1342px] mx-auto items-center gap-[34px] py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-none bg-transparent">
            <CardContent className="p-0">
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-[#e88524] text-[22px] font-['Rubik',Helvetica]">
                  {testimonial.company}
                </h3>
                <p className="font-medium text-white text-lg font-['Rubik',Helvetica]">
                  {testimonial.quote}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-[168px] mt-4">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            className="w-[180px] h-[180px] object-cover"
            alt={`${testimonial.company} logo`}
            src={testimonial.image}
          />
        ))}
      </div>
    </section>
  );
};
