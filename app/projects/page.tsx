"use client";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
// import Image from "next/image";

import { Achievements } from "@/components/index/Achements";
import { data2, PageItemWithPhotos } from "@/config/data";

export default function BlogPage() {
  return (
    <div>
      <Achievements />
      <div className="h-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {data2.map((itm) => (
          <AppCard key={itm.index} item={itm} />
        ))}
      </div>
    </div>
  );
}

function AppCard({ item }: { item: PageItemWithPhotos }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">{item.address}</small>
        <h4 className="font-bold text-large">{item.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          key={"dsdas"}
          alt="Card background"
          className="object-cover rounded-xl"
          height={300}
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
