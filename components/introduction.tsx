import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div>
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/holis.png" priority width="400" height="400" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Desarrolladora
                        <TypeAnimation
                            sequence={[
                                ' Frontend',
                                1000,
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-[#f18dfa]"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    Creo experiencias digitales con  <span className="text-[#f18dfa]">diseño atractivo y funcionalidad eficiente</span> para los usuarios. Estoy buscando unirme a un equipo en una empresa donde pueda aportar mis habilidades, crecer profesionalmente y colaborar en proyectos innovadores.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="https://wa.me/qr/SPB2V6PG23IOO1 "
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-[#f18dfa] border-[#f18dfa] rounded-xl hover:shadow-xl hover:shadow-[#f18dfa]" >
                            WhatsApp
                        </a>
                        <a href="mailto:luelipinali@gmail.com"
                        className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-[#f18dfa] border-[#f18dfa] rounded-xl hover:shadow-xl hover:shadow-[#f18dfa]">
                          Gmail
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;