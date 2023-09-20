const apps: Array<App> = [
    {
        name: "Alta Previa",
        description: "Qué es eso? Cripto? IA? No! Llego una app para hacer tus noches más alocadas. Llena de juegos, retos y mucho más.",
        URLAndroid: "https://play.google.com/store/apps/details?id=com.marte.altaPrevia",
        URLApple: "",
        Image: {
            data: null as any,
            id: 0
        }
    }
]

const seo: Seo = {
    Title: "Utópicx",
    Description: "Utópicx landing page.",
    URL: "https://utopicx.com",
}

const global: GlobalEntity = {
    HomeDescription: "Aventurándonos a crear aplicaciones",
    ProjectTitle: "¡Bienvenidxs!",
    ProjectDescription: "Somos un equipo que le apasiona y divierte la tecnología, creamos productos digitales que impulsan alegría, diversidad e inclusión.",
    ContactDescription: "¿Te gustaría mandarnos un mensaje?",
    ContactFormTitle: "¡Gracias! ❤️",
    ContactFormDescription: "Queremos saber que opinas de nuestra fantabulosidad.",
    Quote: '"El futuro es hoy, oiste viejo" - Dewey',
}

const team: Array<Team> = [{
    name: "Mai",
    description: "Me hago la creativa y ponele que diseño cosas. Elijo el estrés como estilo de vida y me autoproclamo empleada del mes.",
    role: "Marketing & Diseñadorx UI",
    age: 23,
    image: {
        data: null as any,
        id: 0
    },
    imageModified: {
        data: null as any,
        id: 0
    },
}, {
    name: "Guzher",
    description: "Me gustan los números y conocer personas; por eso realizo las cosas, aunque llegue a fallar (O no lleguen a cuadrar las cuentas).",
    role: "Financial Analyst",
    age: 25,
    image: {
        data: null as any,
        id: 0
    },
    imageModified: {
        data: null as any,
        id: 0
    },
}, {
    name: "Jean",
    description: "Trabajador nocturno como si de Batman se tratase. Fanático nro1 de la speed y desarrollador full stack especializado en el BackEnd.",
    role: "BackEnd",
    age: 25,
    image: {
        data: null as any,
        id: 0
    },
    imageModified: {
        data: null as any,
        id: 0
    },
}, {
    name: "Aro",
    description: "Buscando hacer posible lo imposible. Por eso me puedo chupar el codo y coordinar a estos decerebrados al mismo tiempo.",
    role: "CEO",
    age: 25,
    image: {
        data: null as any,
        id: 0
    },
    imageModified: {
        data: null as any,
        id: 0
    },
}, {
    name: "Uxi",
    description: "Mis números favoritos son el 1 y el 0. Enamoradx de Wall-E en secreto y adictx al LCD.",
    role: "Recursos Digitales",
    age: 1,
    image: {
        data: null as any,
        id: 0
    },
    imageModified: {
        data: null as any,
        id: 0
    },
}, {
    name: "David",
    description: "En memoria de David, que prefirió comer libros y entrarle a la papota.",
    role: "BackEnd",
    age: 20,
    image: {
        data: null as any,
        id: 0
    },
    imageModified: {
        data: null as any,
        id: 0
    },
}]


export const defaultData = {
    apps,
    seo,
    global,
    team,
}
