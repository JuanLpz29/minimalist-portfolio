export type Lang = "en" | "es";

export const ui = {
    en: {
        htmlLang: "en",
        nav: {
            experience: "Experience",
            selectedWork: "Selected Work",
            projects: "Personal Projects",
            stack: "Tech Stack",
            about: "About",
            contact: "Contact",
        },
        hero: {
            resume: "Resume",
        },
        experience: {
            title: "Experience",
            present: "Present",
            earlierTitle: "Earlier experience",
        },
        selectedWork: {
            title: "Selected Work",
            privateBadge: "Private codebase",
        },
        projects: {
            title: "Personal Projects",
            privateBadge: "Private repository",
            liveDemo: "Live demo",
            code: "Code",
        },
        stack: {
            title: "Tech Stack",
            languages: "Languages",
            frontend: "Frontend",
            backend: "Backend",
            databases: "Databases",
            devops: "DevOps",
            tools: "Tools",
        },
        about: { title: "About" },
        languages: { title: "Languages", certificate: "Certificate" },
        contact: {
            title: "Contact",
            cta: "Let's talk",
        },
        kbd: {
            hint: "Press",
            palette: "to open the command palette.",
            placeholder: "Search commands",
            print: "Print",
            printSection: "Actions",
            socialSection: "Social",
            visit: "Visit",
            visitProfile: (network: string) => `Visit profile on ${network}`,
            email: (email: string) => `Send an email to ${email}`,
            call: (phone: string) => `Call ${phone}`,
        },
    },
    es: {
        htmlLang: "es",
        nav: {
            experience: "Experiencia",
            selectedWork: "Trabajo Destacado",
            projects: "Proyectos Personales",
            stack: "Tecnologías",
            about: "Sobre mí",
            contact: "Contacto",
        },
        hero: {
            resume: "CV",
        },
        experience: {
            title: "Experiencia",
            present: "Actualidad",
            earlierTitle: "Experiencia anterior",
        },
        selectedWork: {
            title: "Trabajo Destacado",
            privateBadge: "Código privado",
        },
        projects: {
            title: "Proyectos Personales",
            privateBadge: "Repositorio privado",
            liveDemo: "Ver demo",
            code: "Código",
        },
        stack: {
            title: "Tecnologías",
            languages: "Lenguajes",
            frontend: "Frontend",
            backend: "Backend",
            databases: "Bases de Datos",
            devops: "DevOps",
            tools: "Herramientas",
        },
        about: { title: "Sobre mí" },
        languages: { title: "Idiomas", certificate: "Certificado" },
        contact: {
            title: "Contacto",
            cta: "Hablemos",
        },
        kbd: {
            hint: "Presiona",
            palette: "para abrir la paleta de comandos.",
            placeholder: "Buscar comando",
            print: "Imprimir",
            printSection: "Acciones",
            socialSection: "Social",
            visit: "Visitar",
            visitProfile: (network: string) => `Visitar perfil en ${network}`,
            email: (email: string) => `Enviar un correo a ${email}`,
            call: (phone: string) => `Llamar al ${phone}`,
        },
    },
} as const;

export function useTranslations(lang: Lang) {
    return ui[lang];
}
