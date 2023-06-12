import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalhos",
    },
    {
      id: "contact",
      title: "Contatos",
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor Web",
      icon: web,
    },
    {
      title: "Desenvolvedor React Native",
      icon: mobile,
    },
    {
      title: "Desenvolvedor Backend",
      icon: backend,
    },
    {
      title: "Criador de Conteudo",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
 
 
    {
      name: "Node JS",
      icon: nodejs,
    },
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  
  
  ];
  
  const experiences = [
    {
      title: "Analista de Sustentação",
      company_name: "NAVA - Technology for Business",
      icon: starbucks,
      iconBg: "#000000",
      date: "Dez 2022 - Fev 2023",
      points: [
        "Responsável por dar suporte às soluções implementadas em uma empresa, garantindo o seu funcionamento e resolvendo eventuais problemas.",
        "Colaborar em conjunto a uma equipe interna, para ilustrar novas ideias e a viabilidade de projetos. ",
        "Certificar de que o design está responsivo e testar compatibilidade entre navegadores.",
        "Participar de Code Reviews e providenciar o feedback para os desenvolvedores.",
      ],
    },
    {
      title: "Analista de suporte jr",
      company_name: "Algar Tech",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Ago 2022 - Dez 2022",
      points: [
        "responsável por fornecer suporte técnico aos usuários de sistemas, hardware e software. ",
        "identificar e resolver problemas, instalar softwares e atualizações, além de prestar atendimento aos usuários por telefone, chat ou e-mail.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Responsável pela manutenção preventiva de equipamentos e pela criação de documentação de suporte e procedimentos técnicos.",
      ],
    },
    {
      title: "Agente de call center",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Set 2017 - Jul 2018",
      points: [
        "Serviço especializado no atendimento telefônico aos clientes de uma empresa.",
        "As principais atividades realizadas são: atendimento ao cliente, solução de problemas, vendas e negociações, suporte técnico, monitoramento de serviços, gestão de reclamações, pesquisa de satisfação, realização de campanhas de marketing, entre outras.",
        "Para isso, são utilizados sistemas de telefonia, computadores e principalmente, uma equipe de atendentes capacitados e treinados para oferecer um atendimento de qualidade.",
        
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ui - Lover",
      description:
        "Uma aplicação criada para registrar minha experiencia utilizando design inteligente e scrum, usando principalmente kotlin, java e css.",
      tags: [
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Dantas206x/Ui-Lover",
    },
    {
      name: "Calculadora de Peso",
      description:
        "Apenas um teste de logica em Javascript para calcular o peso de uma pessoa em libras para kilogramas e vice e versa.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
      
      ],
      image: jobit,
      source_code_link: "https://github.com/Dantas206x/calculadora-de-peso",
    },
    {
      name: "Trip Guide",
      description:
        "Uma tabela spring para registrar declaração nutricional usando Java em spring",
      tags: [
    
        {
          name: "Spring",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Dantas206x/Tabela-java-spring",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };