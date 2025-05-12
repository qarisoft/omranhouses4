"use client";
import { Card, CardHeader, CardBody } from "@heroui/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";

import { Achievements } from "@/components/index/Achements";
// import { Shareholders } from "@/components/index/Shareholders";
// import { title } from "@/components/primitives";
interface PageItem {
  index: number;
  imgUrl: string;
  className?: string;
  mobileImgUrl?: string;
  title: string;
  address: string;
  images: string[];
}

export default function BlogPage() {
  const morowaPhotos = [
    "morowa/in/DSC03380-HDR (1).jpg",
    "morowa/in/DSC03340-HDR.jpg",
    "morowa/in/DSC03345-HDR.jpg",
    "morowa/in/DSC03350-HDR.jpg",
    "morowa/in/DSC03355-HDR.jpg",
    "morowa/in/DSC03360-HDR.jpg",
    "morowa/in/DSC03365-HDR.jpg",
    "morowa/in/DSC03370-HDR.jpg",
    "morowa/in/DSC03375-HDR.jpg",
    "morowa/in/DSC03380-HDR.jpg",
    "morowa/in/DSC03385-HDR.jpg",
    "morowa/in/DSC03390-HDR.jpg",
    "morowa/in/DSC03395-HDR.jpg",
    "morowa/in/DSC03400-HDR.jpg",
    "morowa/in/DSC03405-HDR.jpg",
    "morowa/in/DSC03410-HDR.jpg",
    "morowa/in/DSC03415-HDR.jpg",
    "morowa/in/DSC03420-HDR.jpg",
    "morowa/in/DSC03425-HDR.jpg",
    "morowa/in/DSC03430-HDR.jpg",
    "morowa/in/DSC03435-HDR.jpg",
    "morowa/in/DSC03440-HDR.jpg",
    "morowa/in/DSC03445-HDR.jpg",
    "morowa/in/DSC03450-HDR.jpg",
    "morowa/in/DSC03455-HDR.jpg",
  ];
  const data2: PageItem[] = [
    {
      className: "",
      index: 0,
      imgUrl: "alnakheel/out/1.jpg",
      mobileImgUrl: "alnakheel/out/1.jpg",
      title: "مشروع منازل 102",
      address: "حي النخيل",
      images: [
        "DSC02840-HDR.jpg",
        "alnakheel/in/DSC02845-HDR.jpg",
        "alnakheel/in/DSC02850-HDR.jpg",
        "alnakheel/in/DSC02855-HDR.jpg",
        "alnakheel/in/DSC02860-HDR.jpg",
        "alnakheel/in/DSC02865-HDR.jpg",
        "alnakheel/in/DSC02870-HDR.jpg",
        "alnakheel/in/DSC02875-HDR.jpg",
        "alnakheel/in/DSC02880-HDR.jpg",
        "alnakheel/in/DSC02885-HDR.jpg",
        "alnakheel/in/DSC02890-HDR.jpg",
        "alnakheel/in/DSC02895-HDR.jpg",
        "alnakheel/in/DSC02900-HDR.jpg",
        "alnakheel/in/DSC02905-HDR.jpg",
        "alnakheel/in/DSC02910-HDR.jpg",
        "alnakheel/in/DSC02915-HDR.jpg",
        "alnakheel/in/DSC02920-HDR.jpg",
        "alnakheel/in/DSC02925-HDR.jpg",
        "alnakheel/in/DSC02930-HDR.jpg",
        "alnakheel/in/DSC02935-HDR.jpg",
        "alnakheel/in/DSC02940-HDR.jpg",
        "alnakheel/in/DSC02945-HDR.jpg",
        "alnakheel/in/DSC02950-HDR.jpg",
        "alnakheel/in/DSC02955-HDR.jpg",
        "alnakheel/in/DSC02960-HDR.jpg",
        "alnakheel/in/DSC02965-HDR.jpg",
        "alnakheel/in/DSC02970-HDR.jpg",
        "alnakheel/in/DSC02975-HDR.jpg",
        "alnakheel/in/DSC02980-HDR.jpg",
        "alnakheel/in/DSC02985-HDR.jpg",
      ],
    },
    {
      className: "",
      index: 1,
      imgUrl: "morowa/out/1.jpg",
      mobileImgUrl: "morowa/out/1.m.jpg",
      title: "مشروع منازل المروة",
      address: "حي المروة",
      images: morowaPhotos,
    },
    {
      className: "",
      index: 2,
      imgUrl: "morowa/out/2.jpg",
      mobileImgUrl: "morowa/out/2.m.jpg",
      title: "مشروع منازل المروة",
      address: "حي المروة",
      images: morowaPhotos,
    },
    {
      className: "",
      index: 3,
      imgUrl: "morowa/out/3.jpg",
      mobileImgUrl: "morowa/out/3.m.jpg",
      title: "مشروع منازل المروة",
      address: "حي المروة",
      images: morowaPhotos,
    },
    // { className: "", index: 5, imgUrl: 'alnakheel/out/1.jpg', mobileImgUrl: 'alnakheel/out/1.jpg', title: 'مشروع منازل 102', address: 'حي النخيل' },
    // { className: "", index: 6, imgUrl: 'alnakheel/out/1.jpg', mobileImgUrl: 'alnakheel/out/1.jpg', title: 'مشروع منازل 102', address: 'حي النخيل' },
  ];

  return (
    <div>
      <Achievements />
      <div className="h-5" />
      <div className="grid grid-cols-2 gap-4">
        {data2.map((itm) => (
          <AppCard key={itm.index} item={itm} />
        ))}
      </div>
      {/* <Shareholders /> */}
    </div>
  );
}

function AppCard({ item }: { item: PageItem }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
        <small className="text-default-500">{item.address}</small>
        <h4 className="font-bold text-large">{item.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          key={"dsdas"}
          alt="Card background"
          className="object-cover rounded-xl"
          src={item.imgUrl}
          width={310}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1">
                  {item.title}
                </DrawerHeader>
                <DrawerBody>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.images.map((img1) => (
                      <Image
                        key={img1}
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={img1}
                        width={310}
                      />
                    ))}
                  </div>
                </DrawerBody>
                <DrawerFooter>
                  {/* <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button> */}
                  <Button color="primary" onPress={onClose}>
                    {"اغلاق"}
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </CardBody>
    </Card>
  );
}
