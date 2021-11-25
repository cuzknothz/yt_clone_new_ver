import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const SearchPage: NextPage = () => {
    const {
        query: { id },
    } = useRouter();
    return <div></div>;
};

export default SearchPage;
