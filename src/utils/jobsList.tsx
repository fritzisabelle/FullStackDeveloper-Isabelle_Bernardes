type TJobsCategories = {
    jobCategory: "FRONT END" | "BACK END" | "FULL STACK" | "UX/UI DESIGN"
}

export const JobList = [
    {
        id: 1,
        name: "Motolink",
        category: "Full Stack",
        type: {
            ptType: "Applicação Web",
            enType: "Web Application",
        },
        cover: "/assets/Projects/Motolink/project-cover1.png",
        galleryImgs: [
            "/assets/Projects/Motolink/img1.jpg",
            "/assets/Projects/Motolink/img2.jpg",
            "/assets/Projects/Motolink/img3.jpg",
            "/assets/Projects/Motolink/img1.jpg",
        ],
        description: {
            ptDescription: "Uma aplicação web que conecta as melhores empresas aos motoboys mais rápidos do mercado.",
            enDescription:"A web application that connects the best companies with the fastest delivery guys.",
        },        
        context: {
            ptContext: "Com o aumento do consumo de produtos por delivery da população cresce também a demanda por motoboys. Essa prática saiu de 40,5% antes da pandemia para 66,1% durante o período de emergência de saúde pública.",
            ptProblem: "Se por um lado temos muita oferta de parceria entre negócios e esses profissionais autônomos, temos também uma dificuldade de comunicação entre eles, já que a maioria das contratações são feitas por indicações e utilizando apps de mensagens instantâneas como o Whatsapp.",
            ptObjective: "Melhorar a comunicação, facilitar o 'match' e fechamento de parcerias entre empresas e motoboys.",
            enContext: "With the increase in the consumption of products through delivery, the demand for couriers is also growing. This practice went from 40.5% before the pandemic to 66.1% during the public health emergency period.",
            enProblem: "While there is a high supply of partnerships between businesses and these self-employed professionals, there is also a communication challenge between them, as most hiring is done through referrals and using instant messaging apps like WhatsApp.",
            enObjective: "Improve communication, facilitate the 'match', and streamline the closing of partnerships between companies and couriers."
        },
        enStrategyDetail: "The development of this project was divided into 3 stages. In the first stage, all the routes that would feed our application with content and the necessary logic for its proper functioning were created. In the second stage, we did what we called 'preparing the ground,' by creating a library of variable style classes, followed by the generic components that would be used multiple times in the application. Once this was completed, the team was split into two pairs. One pair was responsible for developing the login and registration flow screens, while the second pair was in charge of developing the dashboard screens, which had essentially the same structure for both the 'delivery driver' user flow and the 'business' user flow. This approach allowed for speed and productivity, as each pair worked in areas they were more familiar or comfortable with. The result was a fast delivery, fulfilling 100% of the feature requirements defined at the start of the project, with a delivery timeline of 5 days.",
        ptStrategyDetail: "O desenvolvimento desse projeto foi dividido em 3 etapas. Na primeira, foram feitas todas as rotas que alimentariam nossa aplicação com conteúdo e a lógica necessária para o seu correto funcionamento. Na segunda etapa, fizemos o que chamamos de 'preparar o terreno, criando a biblioteca de classes variáveis de estilo, depois os componentes genéricos que seriam utilizados mais de uma vez na aplicação. Terminado isso, o time se dividiu em 2 onde uma dupla ficou responsável pelos desenvolvimento das telas do fluxo de login e cadastro' e a segunda dupla ficou responsavel pelo desenvolvimento das telas de dashboard, que tinham basicamente a mesma estrutura tanto para o fluxo do usuário 'motoboy' quanto do usuário 'negócio'. Com isso conseguimos agilidade e produtividade e cada dupla atuou onde se sentiu mais familiarizado ou confortável. O resultado foi uma entrega rápida e cumprimento de 100% dos requisitos de features definidos no início do projeto e um prazo de entrega de 5 dias.",
        mistakes: {
            mistake_1:{
                ptMistakeDetail: "Trabalhar em equipe é sempre um desafio. Especialmente quando queremos casar entregas interdepentes e temos horários flexíveis entre os integrantes do time. Durante o projeto, poderíamos ter definido melhor o escopo de cada tarefa ao invés de fazer uma abordagem mais abrangente das features trabalhadas. Por exemplo, ao invés de trabalhar a feature 'login', poderíamos ter dissecado a feature login em tarefas menores e feito um plano de ação que nos garantiria mais controle do que vai ser entregue e quando, ao invés de em alguns dias esperar ter a feature login 'pronta'. Assim, poderíamos ter evitado surpresas sobre o quão avançada a tarefa estava e que features dependentes desta poderíamos precisar priorizar ou realocar de acordo com o avanço das entregas dessa feature em questão. Minha regra pessoal agora é sempre quebrar tarefas em pequenas etapas e fazer um acompanhamento mais próximo dessas etapas.",
                enMistakeDetail: "Working in a team is always a challenge, especially when we want to align interdependent deliveries and have flexible schedules among team members. During the project, we could have defined the scope of each task better instead of taking a broader approach to the features being worked on. For example, instead of working on the 'login' feature as a whole, we could have broken it down into smaller tasks and created an action plan that would give us more control over what would be delivered and when, rather than expecting to have the 'login' feature 'ready' in a few days. This way, we could have avoided surprises about how advanced the task was and which dependent features we might need to prioritize or reallocate according to the progress of the deliveries of this particular feature. My personal rule now is to always break tasks into smaller steps and closely monitor these stages.",
            },
            mistake_2:{
                ptMistakeDetail: "Acredito demais em trabalho remoto e que devemos confiar na palavra das pessoas, mas também é sabido que nem todo mundo cumpre com o combinado. Alguns com motivações reais que justificam os seus atrasos e outros nem tanto. Durante o projeto novamente o desafio foi conseguir conciliar as entregas de features interdependentes e próximo ao prazo de entrega, por eu ter confiado demais em alguns integrantes do time, acabei tendo que resolver alguns gargalos de última hora e sobrecarregando outros membros do time por não ter acompanhado mais de perto o que estava sendo feito no dia a dia. ",
                enMistakeDetail: "I strongly believe in remote work and that we should trust people's word, but it is also known that not everyone fulfills what was agreed upon. Some have real motivations that justify their delays, while others do not. During the project, the challenge again was to reconcile the deliveries of interdependent features close to the deadline. Because I trusted some team members too much, I ended up having to resolve some bottlenecks at the last minute and overburdening other team members by not closely monitoring what was being done on a daily basis. My personal rule now is to always break tasks into smaller steps and closely monitor these stages.",
            },
        },
        behanceLink: "url-behance.com.br",
        repositoryLink: "https://github.com/fritzisabelle/MotoLink",
        onlineLink: "https://moto-link.vercel.app/",
        linkedinArticle: "url-linkedinArticle.com.br",
        technologies: ['React', 'Typescript', 'Axios', 'Styled-Components', 'Routers', 'Toastify', 'Zod', 'HookForm']
    },
    {
        id: 2,
        name: "Em breve",
        category: "Back End",
        type: {
            ptType: "Aplicação Web",
            enType: "Web App",
        },
        cover: "/assets/imgs/project-cover2.jpg",
        galleryImgs: [
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
        ],
        ptDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        enDescription:"Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        context: {
            ptProblem: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            ptContext: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            ptObjective: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enProblem: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enContext: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enObjective: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique."
        },
        enStrategyDetail: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        ptStrategyDetail: "Seu certo pt strategyDetails. Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        mistakes: {
            mistake_1:{
                ptMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
                enMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            },
            mistake_2:{
                ptMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
                enMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            },
        },
        behanceLink: "url-behance.com.br",
        repositoryLink: "url-repository.com.br",
        onlineLink: "url-online.com.br",
        linkedinArticle: "url-linkedinArticle.com.br",
        technologies: ['React', 'Typescript', 'Axios', 'Styled-Components', 'Routers', 'Toastify', 'Zod', 'HookForm']
    },
    {
        id: 3,
        name: "Em breve",
        category: "Front End",
        type: {
            ptType: "Aplicação Web",
            enType: "Web App",
        },
        cover: "/assets/imgs/project-cover2.jpg",
        galleryImgs: [
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
        ],
        ptDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        enDescription:"Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        context: {
            ptProblem: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            ptContext: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            ptObjective: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enProblem: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enContext: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enObjective: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique."
        },
        enStrategyDetail: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        ptStrategyDetail: "Seu certo pt strategyDetails. Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        mistakes: {
            mistake_1:{
                ptMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
                enMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            },
            mistake_2:{
                ptMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
                enMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            },
        },
        behanceLink: "url-behance.com.br",
        repositoryLink: "url-repository.com.br",
        onlineLink: "url-online.com.br",
        linkedinArticle: "url-linkedinArticle.com.br",
        technologies: ['React', 'Typescript', 'Axios', 'Styled-Components', 'Routers', 'Toastify', 'Zod', 'HookForm']
    },
    {
        id: 4,
        name: "Em breve",
        category: "Full Stack",
        type: {
            ptType: "Aplicação Web",
            enType: "Web App",
        },
        cover: "/assets/imgs/project-cover2.jpg",
        galleryImgs: [
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
        ],
        ptDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        enDescription:"Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        context: {
            ptProblem: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            ptContext: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            ptObjective: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enProblem: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enContext: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enObjective: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique."
        },
        enStrategyDetail: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        ptStrategyDetail: "Seu certo pt strategyDetails. Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        mistakes: {
            mistake_1:{
                ptMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
                enMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            },
            mistake_2:{
                ptMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
                enMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            },
        },
        behanceLink: "url-behance.com.br",
        repositoryLink: "url-repository.com.br",
        onlineLink: "url-online.com.br",
        linkedinArticle: "url-linkedinArticle.com.br",
        technologies: ['React', 'Typescript', 'Axios', 'Styled-Components', 'Routers', 'Toastify', 'Zod', 'HookForm']
    },
    {
        id: 5,
        name: "Em breve",
        category: "Back End",
        type: {
            ptType: "Aplicação Web",
            enType: "Web App",
        },
        cover: "/assets/imgs/project-cover2.jpg",
        galleryImgs: [
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
            "/assets/imgs/project-cover1.jpg",
        ],
        ptDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        enDescription:"Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        context: {
            ptProblem: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            ptContext: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            ptObjective: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enProblem: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enContext: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            enObjective: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique."
        },
        enStrategyDetail: "Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        ptStrategyDetail: "Seu certo pt strategyDetails. Consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
        mistakes: {
            mistake_1:{
                ptMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
                enMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            },
            mistake_2:{
                ptMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
                enMistakeDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla accumsan, luctus orci eget, venenatis metus. Pellentesque a nisl ipsum. Maecenas vestibulum arcu a elementum tristique.",
            },
        },
        behanceLink: "url-behance.com.br",
        repositoryLink: "url-repository.com.br",
        onlineLink: "url-online.com.br",
        linkedinArticle: "url-linkedinArticle.com.br",
        technologies: ['React', 'Typescript', 'Axios', 'Styled-Components', 'Routers', 'Toastify', 'Zod', 'HookForm']
    },
]

export const stacks = ["React", "Typescript", "UX/UI Design", "API RestFull", "Django", "Fullstack", "Front End", "Back End", "Web Application", "Landing page", "Mobile"]