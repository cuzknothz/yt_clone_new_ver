import { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";

const WatchPage: NextPage = () => {
    const {
        query: { id },
    } = useRouter();

    return <div></div>;
};

export default WatchPage;
