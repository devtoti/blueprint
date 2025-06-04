export const projects = [
      {
        id: 1,
        number: "01",
        title: "Junkhaul Moving Services",
        url: "https://365junkhaul.com",
        figmaUrl: "https://www.figma.com/design/4TdqqJPYD8Izdw9juaBbwQ/IKOL-Website-Revamp?m=auto&t=Rq2F6EOQRSZ11S3z-1",
        image: "src/lib/images/365junkhaul-preview.png",
        description:
          "Checkout con sistema de pagos y dashboard de administración para la empresa Junkhaul Moving Services. Desarrollado con React, Nextjs, TailwindCSS, Typescript, Figma, Stripe, Supabase.",
        tags: ["React", "Nextjs", "TailwindCSS", "Typescript", "Figma", "Stripe", "Supabase"],
        bullets: [
            {
                title: "Checkout",
                description: "Creación de un checkout para contratar servicios de mudanza con un catálogo de 1000+ productos de Supabase, integrado con Stripe para procesar pagos.",
            },
            {
                title: "Dashboard",
                description: "Implementación de un dashboard en SvelteKit conectado con el API de Stripe para administrar las compras y darle seguimiento a los pedidos.",
            },
            {
                title: "Autenticación",
                description: "Implementación de Magic Link para permitir a los usuarios iniciar sesión (user/admin) y darle seguimiento a sus compras.",
            }
        ]
      },
      {
        id: 2,
        number: "02",
        title: "MobileKangaroo",
        url: "https://mobilekangaroo.com",
        figmaUrl: "https://www.figma.com/design/dF4RjnxjxV0xF2gi8iMfXU/MobileKangaroo-Website-Revamp?node-id=0-1&t=U2HbEfk7Y2UhRWo1-1",
        image: "src/lib/images/mobilekangaroo-preview.png",
        description:
          "Rediseño de la landing page de MobileKangaroo, una empresa certificada por la Apple especializada en la reparación de dispositivos electrónicos con 30+ tiendas en los Estados Unidos.",
        tags: ["Animations", "Nextjs", "TailwindCSS", "Typescript", "Figma", "Illustrations"],
        bullets: [
          {
            title: "Reestructuración",
            description: "Rediseño radical de la página web a partir de un nuevo sistema de diseño y estructura de navegación.",
          },
          {
            title: "Ilustraciones",
            description: "Diseño de ilustraciones vectorizadas para la nueva landing page creadas desde cero.",
          },
          {
              title: "Aprobación Apple",
              description: "La nueva landing page fue aprobada por Apple en cuanto a estética y sus requerimientos de diseño.",
          },
        ]
      },
      {
        id: 3,
        number: "03",
        title: "BB4MD Website",
        url: "https://bb4md.com",
        figmaUrl: "https://www.figma.com/design/zG985mX5ZGboL0GvxWbVMU/BB4MD-Website-Revamp?m=auto&t=Rq2F6EOQRSZ11S3z-1",
        image: "src/lib/images/bb4md-preview.png",
        description:
          "Rediseño de la landing page de BB4MD, una pequeña empresa canadiense dedicada a la venta de libros ilustrados enfocados en motivar y enseñar a nuevos padres de familia a cuidar de sus bebés por medio de la ciencia del parenting.",
        tags: ["UI/UX", "Frontend", "Figma", "Illustrations", "Wix", "Custom UI"],
        bullets: [
            {
                title: "E-commerce",
                description: "Inclusión de un e-commerce para la venta de libros enfocada a nuevos padres de familia, con distribución local en British Columbia, Canadá.",
            },
            {
                title: "Diseño único",
                description: "La estética y formato de los libros de BB4MD fue replicado en CSS para la landing page, dando la impresión de que se trata de un libro digital.",
            },
            {
                title: "Diseño Wix",
                description: "Los prototipos de las secciones de la landing page fueron creados en Figma, y luego implementados en Wix.",
            }
        ]
      },
      {
        id: 4,
        number: "04",
        title: "IKOL Web 3.0",
        url: "https://ikolcoin.com",
        figmaUrl: "https://www.figma.com/design/4TdqqJPYD8Izdw9juaBbwQ/IKOL-Website-Revamp?m=auto&t=Rq2F6EOQRSZ11S3z-1",
        image: "src/lib/images/ikol-preview.png",
        description:
    "Revamp de la landing page de IKOL Coin, un ecosistema de criptomonedas enfocado a la contratación de influencers mediante un sistema de pago descentralizado.",
    tags: ["UI/UX", "Design System", "Figma", "Illustrations", "GSAP", "Landing Page"],
    bullets: [
      {
        title: "Paleta única",
        description: "Se optó por una paleta de colores grisácea-azulada, contrastado con acentuaciones amarillentas, con efectos de glassmorphism para jugar con los niveles de profundidad de la página web.",
      },
      {
        title: "Modularidad",
        description: "El diseño se adapta a distintas pantallas, asegurando la adaptabilidad de todos los componentes personaliazados.",
      },
      {
        title: "Ilustraciones",
        description: "Se crearon ilustraciones isométricas de trazos geométricos para darle un aspecto moderno e innovador a cada sección de la landing page.",
      },
    ],
  }, {
    id: 5,
    number: "05",
    title: "ClassicUI Library",
    url: null,
    figmaUrl: null,
    image: "src/lib/images/classic-preview.png",
    description:
      "Proyecto en curso de una librería de componentes de UI para React inspirada el diseño blueprint de esta página web.",
    tags: ["Nodejs", "React", "npm", "TailwindCSS"],
    bullets: [
        {
            title: "Componentes de UI",
            description: "Diseños de componentes inspirados en los tres ordenes clásicos arquitectónicos más relevantes: dórico, jónico, corintio",
        },
        {
            title: "Blueprint",
            description: "Cada componente es diseñado primeramente mediante wireframes, y luego prototipado utilizando tokens de diseño.",
        },
        {
            title: "Tokens",
            description: "Parámetros de diseño consistentes para mantener la coherencia visual y estética de la librería.",
        }
    ]
  },
];
