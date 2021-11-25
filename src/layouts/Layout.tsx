import { Header } from "@/components/Header/Header";
import React from "react";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
