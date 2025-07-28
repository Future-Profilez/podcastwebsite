import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Testimonials from "@/pages/home/Testimonials";

export default function Layout({ children }) {

    return (
        <>
            <Header />
            <main>{children}</main>
            <Testimonials/>
            <Footer />
        </>
    );
}