import { Project } from "@/app/(app)/ProjectsSection";

export const PROJECTS: Project[] = [
  // Projetos Empresariais
  {
    id: "1",
    type: "Front-end",
    title: "Sistema de Produção de Pacotes",
    description:
      "Sistema interno para produzir e acompanhar a separação de pacotes com dashboard em tempo real.",
    techs: ["React", "Material UI", "TypeScript"],
  },
  {
    id: "2",
    type: "Full-stack",
    title: "Sistema de Atendimento",
    description:
      "Ferramenta interna para centralizar atendimentos, registros e histórico de interações, facilitando o acompanhamento de demandas operacionais e de clientes.",
    techs: [
      "React",
      "Node.js",
      "Material UI",
      "TypeScript",
      "NestJS",
      "WebSocket",
      "RabbitMQ",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    id: "3",
    type: "Back-end",
    title: "Serviço de Faturamento",
    description:
      "Serviço responsável por automatizar o processo de faturamento de acordo com as regras de negócio da empresa.",
    techs: ["Python", "Django", "PostgreSQL", "RabbitMQ"],
  },
  {
    id: "4",
    type: "Back-end",
    title: "Integração de Boletos",
    description:
      "Serviço responsável por registrar, consultar e conciliar boletos, garantindo integração confiável entre banco e sistemas internos.",
    techs: ["Node.js", "NestJS", "RabbitMQ", "PostgreSQL"],
  },

  // Projetos Pessoais
  {
    id: "5",
    type: "Full-stack",
    title: "Plataforma de Promoções e Ofertas",
    description:
      "Plataforma de divulgação de promoções e ofertas de produtos com dashboard, gestão de promoções e ofertas.",
    longDescription:
      "Plataforma de divulgação de promoções e ofertas de produtos com dashboard, gestão de promoções e ofertas.",
    images: [
      "/projects/achadospromo/1.png",
      "/projects/achadospromo/2.png",
      "/projects/achadospromo/3.png",
      "/projects/achadospromo/4.png",
      "/projects/achadospromo/5.png",
      "/projects/achadospromo/6.png",
    ],
    techs: [
      "Next.js",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Vercel",
      "Supabase",
    ],
    demo: "https://achadospromo.com",
  },
  {
    id: "6",
    type: "Front-end",
    title: "Pomodoro.Dev",
    description: "Pomodoro.Dev é uma aplicação de timer de pomodoro.",
    longDescription:
      "Projeto desenvolvido em 2021 como um projeto pessoal para treinar minhas habilidades com Next.js e TypeScript.",
    images: [
      "/projects/pomodoro/1.png",
      "/projects/pomodoro/2.png",
      "/projects/pomodoro/3.png",
    ],
    techs: ["Next.js", "TypeScript", "Vercel"],
    demo: "https://pomodorodev.vercel.app/",
    github: "https://github.com/thsthiago/pomodoro.dev",
  },
];
