import { useAppDispatch } from "@/store";
import { getVideosBySearch } from "@/store/action-thunk/videos.action";
import React, { useState } from "react";

const Search: React.FC = () => {
    const dispatch = useAppDispatch();
    const [keywordSearch, setKeywordSearch] = useState<string>("");
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getVideosBySearch(keywordSearch));
    };
    return (
        <form
            onSubmit={handleSearch}
            className="w-full h-full hidden md:flex justify-center items-center"
        >
            <input
                type="text"
                value={keywordSearch}
                onChange={(e) => {
                    setKeywordSearch(e.target.value);
                }}
                className="w-[400px] px-5 py-[2px] focus:outline-none border-[1px] border-black/20"
                placeholder="Search"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default React.memo(Search);
