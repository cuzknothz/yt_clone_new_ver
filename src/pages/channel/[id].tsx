import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const ChannelPage: NextPage = () => {
    const {
        query: { id },
    } = useRouter();
    return <div></div>;
};

export default ChannelPage;
