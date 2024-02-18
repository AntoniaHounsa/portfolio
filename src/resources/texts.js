// texts.js

const texts = {
    heroSection: {
        greeting: "Bonjour, Je suis Antonia HOUNSA",
        aboutMe: "Fraîchement diplômée et infiniment motivée : je suis une Ingénieure Conceptrice Développeuse prête à relever les défis de demain. Bienvenue dans l'espace où passion et compétence se rencontrent."
    },
    skillsSection: {
        titleTechnologies: "Technologies : ",
        skills: [
            {icon:'/assets/images/html-icon.png', name:'HTML' },
            {icon:'/assets/images/css-icon.png', name:'CSS' },
            {icon:'./assets/images/js-icon.png', name:'JavaScript' },
            {icon:'./logo192.png', name:'React' },
            {icon:'/assets/images/csharp-icon.png', name:'C#' },
            {icon:'/assets/images/net-icon.png', name:'.Net' },
            {icon:'/assets/images/java-icon.png', name:'Java' },
            {icon:'/assets/images/spring-icon.png', name:'SpringBoot' },
            {icon:'/assets/images/sql-icon.png', name:'SQL' },
        ] ,
        titleProjectManagment: "Gestion de projets : ",
        projectManagementList: [
            {icon:'/assets/images/git-icon.png', name:'Git'},
            {icon:'/assets/images/scrum-icon.png', name:'SCRUM'},
            {icon:'/assets/images/jira-icon.png', name:'JIRA'}
        ]
    },
    sectionTitle: {
        skills: "Compétences ",
        projects: "Projets ",
        certifications: "Certifications "
    },
    projects : [

        {
          title: 'Application mobile de livraison de marchandises',
          description: ' Développement d\'une application  pour chauffeurs, planificateurs et clients, intégrant authentification, sélection de produits, et suivi de missions avec OpenStreetMap.',
          image: '/assets/images/ProjetAndroid/accueil.png',
          technologies: ['Java', 'MVP', 'NoSQL', 'OpenStreetMap'],
          github: 'https://github.com/AntoniaHounsa/Livraison-Android-'
        },
        {
            title: 'Portfolio web',
            description: 'Mon portfolio web est une passerelle  présentant mon éventail de compétences, mettant en lumière mes projets personnels  avec des descriptions détaillées et un accès direct aux codes sources.',
            image: '/assets/images/portfolioImages/accueil.png',
            technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'NodesJs'],
            github: 'https://github.com/AntoniaHounsa/portfolio'
        }

      ],
    certifications : [
        {
            title: 'Certificat de complétion de cours de React.js',
            image: '/assets/images/certifications/react.png',
            link: 'https://www.linkedin.com/learning/certificates/38e0cd1f2f86995ea0617a787f9addce721b45486ee09be129536522d0064d39'
        },
        {
            title: 'Microsoft Certified: Azure Fundamentals',
            image: '/assets/images/certifications/az900.png',
            link: 'https://www.credly.com/badges/15366f23-e7eb-4a50-a182-dba5c7708b35/public_url'
        },
    ],
    contact: [
        {
            icon: "EmailIcon",
            content: "antonia.hounsa@groupe-esigelec.org"
        },
        {
            icon: "PhoneIcon",
            content: "07 53 00 77 82"
        }
    ]

};

export default texts;
