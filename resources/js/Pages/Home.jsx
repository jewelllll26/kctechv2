import React from "react";
import AuthSidebar from "../Components/Layouts/AuthSidebar";
import Footer from "../Components/Shared/Footer";

function Home({ reservationCount }) {
    return (
        <>
            <div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[60svh] flex justify-center items-center text-white">
                    <div className="w-[750px] text-center animate-fadeIn">
                        <span className="text-[60px] font-semibold">
                            Relax and unwind at Kandahar Resort
                        </span>
                        <div className="mb-10">
                            Experience comfort and luxury with hassle-free
                            reservations. Your getaway awaits!
                        </div>
                        <a
                            href="/searchRoom"
                            className="border border-white rounded-full py-3 px-7"
                        >
                            Book now
                        </a>
                    </div>
                </div>

                <section className="flex flex-col md:flex-row container mx-auto px-5 my-14">
                    <div className="w-full my-auto" data-aos="fade-right">
                        <h1 className="text-[50px] font-semibold text-gray-800">
                            Welcome to Kandahar Resort
                        </h1>
                        <p className="text-gray-700">
                            Experience unparalleled comfort and hospitality at
                            Kandahar Resort, where we offer a variety of rooms
                            and services tailored to make your stay
                            unforgettable. Reservations are easy and convenient.
                        </p>
                        <div className="flex flex-col md:flex-row gap-0 mt-8 sm:gap-10 items-start sm:items-center">
                            <div
                                data-aos="zoom-in"
                                className="text-left sm:text-center"
                            >
                                <h1 className="text-blue-900 text-[50px]">
                                    {reservationCount}
                                </h1>
                                <p className="text-sm text-gray-700">
                                    Book now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8 md:mt-0" data-aos="fade-left">
                        <img
                            src="/img/tables-sea-view.jpg"
                            className="rounded"
                            alt="Sea View"
                        />
                    </div>
                </section>

                <section></section>
            </div>
            <Footer />
        </>
    );
}

export default Home;
