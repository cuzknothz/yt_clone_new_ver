import React from "react";
import Link from "next/link";
import { appRoutes } from "@/routes";
import { useAppDispatch } from "@/store";
import { login } from "@/store/action-thunk/auth.action";
const rightData = ["Search", "Subscription", "Login"];
const NavSection = () => {
    const dispatch = useAppDispatch();
    return (
        <nav className="h-full">
            <ul className="flex h-full items-center space-x-5 justify-end">
                {rightData.map((i, idx) => (
                    <>
                        <Link href="/" passHref>
                            <li className="md:cursor-pointer" key={idx}>
                                {i}
                            </li>
                        </Link>
                    </>
                ))}
                <Link href="/" passHref>
                    <li
                        onClick={() => {
                            dispatch(login());
                        }}
                        className="md:cursor-pointer"
                    >
                        sign in
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default React.memo(NavSection);
