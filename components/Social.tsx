// import {Link} from "@nextui-org/link";
import { FaceBookIcon, InstagramIcon, SnapIcon, TikTokIcon, WhatsAppIcon, XIcon } from "@/components/icons";
import { Link } from "@heroui/link";
import React from "react";

export const Social = () => {
    return (
        <div className="flex bg-blue-6 align-middl items-center align-bottom justify-center gap-2">
            <Link href={'https://x.com/almnazl8?t=MNVcmb2lk1gSSUMjdh3AmA&s=09'}>
                <XIcon size={24} />
            </Link>
            <Link href={'https://www.facebook.com/mnazel.alomran?mibextid=ZbWKwL'}>
                <FaceBookIcon />
            </Link>
            <Link href={'https://www.snapchat.com/add/mnazelalomran?share_id=iqnUCGTxd0w&locale=ar-EG'}>
                <SnapIcon className="" />
            </Link>
            <Link href={'https://www.instagram.com/mnazlmnazlalmran?igsh=MWc5aGRmdWtpMDkxNQ=='}>
                <InstagramIcon className="" />
            </Link>
            <Link href={'https://www.tiktok.com/@mnazlalomran?_t=8njsj1eqpnu&_r=1'}>
                <TikTokIcon className="" />
            </Link>
            <Link>

                <WhatsAppIcon className="" />
            </Link>
        </div>
    );
};