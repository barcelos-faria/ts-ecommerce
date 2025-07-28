"use client";
import React, { useEffect, useState } from "react";

const AnnouncementBar = () => {
    return (
        <div className="w-full bg-black py-2">
            <div className="container mx-auto flex items-center justify-center px-8">
                <span className="text-center text-sm font-medium tracking-wide text-white">
                    Free Shipping On Orders Over $15.00 x Free Returns
                </span>
            </div>
        </div>
    )
}

const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [prevScrollY, setPrevscrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrolledUp = currentScrollY < prevScrollY;

            if (scrolledUp) {
                setIsOpen(true);
            } else if(currentScrollY > 100){
                setIsOpen(false);
            }
            setPrevscrollY(currentScrollY);

        }
        setPrevscrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prevScrollY])

    return (
        <header className="w-full sticky top-0 z-50">
            <div className={`w-full transform transition-transform duration-300 easy-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <AnnouncementBar/>
            </div>
        </header>
    )
}

export default Header