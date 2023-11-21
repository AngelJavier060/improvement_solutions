import prog_img_1 from '../images/prog_img_1.svg';
import prog_img_2 from '../images/prog_img_2.svg';
import prog_img_3 from '../images/prog_img_3.svg';

import serv_img from '../images/impr11.png';

import testimonio_angel from '../images/testimonio-angel.jpg'
import testimonio_elvia from '../images/testimonio-elvia.jpg'
import testimonio_miguel from '../images/testimonio-miguel.jpg'

const metaDataHome = {

    program: {
        title: "Que programas te ofrecemos:",
        description: "Potencie su negocio con nuestras promociones en programas informáticos de apoyo, impulsando la eficiencia y el éxito de su empresa.",
        programs: [
            {
                title: "Control del personal",
                description: "Optimice la gestión de su equipo con nuestro software de recursos humanos, brindando control, eficiencia y transparencia en la administración del personal.",
                image: prog_img_1,
            },
            {
                title: "Indices de Accidentabilidad",
                description: "Los índices proactivos y reactivos son herramientas de medición que se utilizan en diversos contextos para evaluar el desempeño y la gestión de una empresa, equipo, proceso o sistema.",
                image: prog_img_2,
            },
            {
                title: "Cumplimientos de Gestión",
                description: "La combinación de nuestro talento humano y tecnología avanzada nos permite ofrecer servicios profesionales de manera eficaz y eficiente, cumpliendo con cada uno de sus requisitos.",
                image: prog_img_3,
            }
        ]
    },
    service: {
        title: "Serviciso Especialidado en QHSE",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nihil, illo qui iusto dicta, sed, inventore quis eaque similique cupiditate beatae numquam magni earum enim facere quo voluptatum? Repellendus, voluptas!",
        image: serv_img,
        text_button: "Prueba nuestros sistemas"
    },
    plan: {
        title: "Obten el plan perfecto para apreder",
        plans: [
            {
                title: "Free",
                items: [
                    "Flexbox", "Layouts", "Responsive"
                ],
                is_promotion: false,
                text_button: "Empieza ahora",
            },
            {
                title: "$30/mes",
                items: [
                    "Grid", "ImplicitGrid", "Responsive", ""
                ],
                is_promotion: true,
                text_button: "Empieza ahora",
            },
            {
                title: "$40/mes",
                items: [
                    "Animations", "Transition", "Render Website"
                ],
                is_promotion: false,
                text_button: "Empieza ahora",
            },

        ]
    },
    users: [
        {
            title: "Mi nombre es Angel, estudiante de CSS.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit obcaecati tempore eius voluptatem, laboriosam quod temporibus omnis exercitationem illum rem maxime voluptates, labore quasi quae quos in accusamus qui. Sequi!",
            image: testimonio_angel,
        },
        {
            title: "Mi nombre es Alexandra, estudiante de CSS.",
            description: "Los índices proactivos y reactivos son herramientas de medición que se utilizan en diversos contextos para evaluar el desempeño y la gestión de una empresa, equipo, proceso o sistema.",
            image: testimonio_elvia,
        },
        {
            title: "Mi nombre es Miguel Calderon, estudiante de CSS.",
            description: "La combinación de nuestro talento humano y tecnología avanzada nos permite ofrecer servicios profesionales de manera eficaz y eficiente, cumpliendo con cada uno de sus requisitos.",
            image: testimonio_miguel,
        }
    ],
    questions: {
        title: "Preguntas frecuentes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        items: [
            {
                title: "¿ Que es Improvments Solution",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nemo voluptate nobis placeat eaque enim, delectus officia voluptatem error illo iusto. Nemo, fugiat facere? Facere nostrum molestiae sit nulla hic!"
            },
            {
                title: "¿ Como Puedo adquirirlo",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nemo voluptate nobis placeat eaque enim, delectus officia voluptatem error illo iusto. Nemo, fugiat facere? Facere nostrum molestiae sit nulla hic!"
            },
            {
                title: "¿ Cuanto timpo hay de asesoria",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, nemo voluptate nobis placeat eaque enim, delectus officia voluptatem error illo iusto. Nemo, fugiat facere? Facere nostrum molestiae sit nulla hic!"
            },
        ]
    },
    learn: {
        title: "Estas listo para apreder",
        description: "En la industria se lleva un sinnumero de activoade que debe ir con seguridad",
        text_button: "Aprende ahora"
    }

}

export default metaDataHome;