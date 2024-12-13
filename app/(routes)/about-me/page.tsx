"use client"

import { Avatar } from "@/components/avatar";
import { CoverParticles } from "@/components/cover-particles";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
            <CoverParticles />
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-[#f18dfa]">
                        experiencia laboral
                    </span>
                </h1>



                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;