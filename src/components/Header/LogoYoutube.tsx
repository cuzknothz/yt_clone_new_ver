import React from "react";
import YoutubeIcon from "@/assets/svgs/youtube.svg";
import Link from "next/link";
import { appRoutes } from "@/routes";

const LogoYoutube: React.FC = () => {
    return (
        <div className="w-[40px] md:cursor-pointer">
            <Link href={appRoutes.home} passHref>
                <YoutubeIcon />
            </Link>
        </div>
    );
};

export default React.memo(LogoYoutube);
