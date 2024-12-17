import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github, Code } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Ícono de FontAwesome

export const socialNetworks = [
    
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/luciana-elipinali-3518182a6/",
    },

    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/LucianaElipinali",
    },
   
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
  
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Responsable de Ventas y Gestión de Redes Sociales",
        subtitle: "Garage Showroom | Santa Lucía, San Juan, Argentina",
        description: "Diseñé y gestioné contenido para redes sociales (Instagram y WhatsApp).Fortalecí habilidades en atención al cliente y comunicación",
        date: "Dic. 2022",
    },
    {
        id: 3,
        title: "Creadora de Contenido Digital",
        subtitle: "De Ronda Resto Bar | Santa Lucía, San Juan, Argentina",
        description: "Desarrollé contenido visual para redes sociales, incluyendo fotografía, diseño y publicación en Instagram, Facebook y WhatsApp.",
        date: "Ene. 2020",

    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },

];

export const serviceData = [
   
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    
    {
        icon: <Code />,
        title: "Desarrollo de Aplicaciones Web",
        description: "Creación de aplicaciones web con React, Redux y GraphQL.",
    },
];

export const dataPortfolio = [
    
    {
        id: 8,
        title: "DOGTEL",
        image: "/Dogtel.png",
        urlGithub: "https://github.com/henrydogtel/DogTelApp",
        urlDemo: "https://resplendent-dusk-fc15f6.netlify.app/",
    }
];
