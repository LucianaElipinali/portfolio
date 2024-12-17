import AvatarServices from "@/components/avatar-services";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";
const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <AvatarServices />
            <CoverParticles />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-[#f18dfa]"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <a href="https://wa.me/qr/SPB2V6PG23IOO1 "
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-[#f18dfa] border-[#f18dfa] rounded-xl hover:shadow-xl hover:shadow-[#f18dfa]" >
                            WhatsApp
                        </a>
                        <a href="mailto:luelipinali@gmail.com"
                        className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-[#f18dfa] border-[#f18dfa] rounded-xl hover:shadow-xl hover:shadow-[#f18dfa]">
                          Gmail
                        </a>

                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;