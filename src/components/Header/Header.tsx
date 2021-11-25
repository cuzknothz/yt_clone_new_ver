import React from "react";
import LogoYoutube from "./LogoYoutube";
import NavSection from "./NavSection";
import Search from "./Search";

export const Header: React.FC = () => {
    return (
        <>
            <header className="w-full fixed h-[50px] border-b-[1px] border-t-[1px] grid md:grid-cols-3 grid-cols-2 border-black/20 items-center">
                {/* logo section */}
                <LogoYoutube />
                {/* search section */}
                <Search />
                {/* left side */}
                <div className="h-full">
                    <NavSection />
                </div>
            </header>
        </>
    );
};
