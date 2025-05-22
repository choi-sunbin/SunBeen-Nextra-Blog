export const NAVIGATION = [
	{
		id: "1",
		isSelectable: true,
		name: "src",
		children: [
			{
				id: "4",
				isSelectable: true,
				name: "projects",
				children: [
					{
						id: "5",
						isSelectable: false,
						name: "main.tsx"
					},
					{
						id: "7",
						isSelectable: false,
						name: "footer.tsx"
					}
				]
			},
			{
				id: "9",
				isSelectable: true,
				name: "blog",
				children: [
					{
						id: "9",
						isSelectable: true,
						name: "utils.ts"
					}
				]
			}
		]
	}
];

export const NETWORKING_LINKS = [
	{
		name: "GitHub",
		href: "https://github.com/choi-sunbin",
		tooltip: "GitHub"
	},
	{
		name: "Email",
		href: "mailto:csn1434@naver.com",
		tooltip: "Email"
	},
	{
		name: "Resume",
		href: "/assets/resume.pdf",
		tooltip: "Resume"
	}
];

export const SOCIALS = [
	{
		name: "GitHub",
		url: "https://github.com/imesh97/",
		icon: "https://img.icons8.com/3d-fluency/94/github.png"
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/imesh-nimsitha/",
		icon: "https://img.icons8.com/3d-fluency/94/linkedin--v1.png"
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/imesh.gg/",
		icon: "https://img.icons8.com/3d-fluency/94/instagram-new.png"
	},
	{
		name: "Email",
		url: "mailto:imesh.nimsitha@gmail.com",
		icon: "https://img.icons8.com/3d-fluency/94/mail.png"
	},
	{
		name: "X",
		url: "https://x.com/imesh97",
		icon: "https://img.icons8.com/fluency/144/twitterx--v1.png"
	}
];

export const PROJECTS = [
	{
		title: "symptomstream v0.1",
		description: "A real-time AI medical assistant for generating triage prompts and optimizing workflows.",
		image: "/assets/projects/cover_symptomstream.jpeg",
		technologies: ["Next.js", "TypeScript", "OpenAI", "Web Speech API", "Tailwind CSS"],
		demoUrl: "https://symptomstream.ca",
		demoUrlText: "live",
		githubUrl: ""
	},
	{
		title: "nexusquiz - trivia game",
		description: "Real-time multiplayer with leader election, state replication and fault tolerance.",
		image: "/assets/projects/cover_nexusquiz.jpeg",
		technologies: ["Next.js", "FastAPI", "WebSockets", "Socket.IO", "Raft Consensus"],
		demoUrl: "https://drive.google.com/file/d/1ZJU_cDErc5cFRO5KBX-DtXh0k9jFPeNh/view?usp=sharing",
		githubUrl: "https://github.com/imesh97/nexusquiz"
	},
	{
		title: "affinity.ai - crm",
		description: "A lead generation & automation CRM landing page. Responsive, redesigned, and AODA-compliant.",
		image: "/assets/projects/cover_affinity.jpeg",
		technologies: ["Next.js", "Supabase", "Python", "FastAPI", "Gmail API", "Twilio"],
		demoUrl: "https://affinityautogroup.ca",
		demoUrlText: "live",
		githubUrl: ""
	},
	{
		title: "tunetype - lyric classifier",
		description: "Using Multinomial Naive Bayes, Support Vector Machine, and fine-tuned BERT models.",
		image: "/assets/projects/cover_tunetype.jpeg",
		technologies: ["Python", "TensorFlow", "Transformers", "Google BERT", "scikit-learn"],
		demoUrl: "https://github.com/imesh97/tunetype/blob/main/report.pdf",
		githubUrl: "https://github.com/imesh97/tunetype",
		demoUrlText: "report"
	},
	{
		title: "bankrpc - distributed banking",
		description: "A distributed banking system with data persistence and transaction concurrency.",
		image: "/assets/projects/cover_bankrpc.jpeg",
		technologies: ["Python", "Streamlit", "gRPC", "Redis", "AWS EC2", "Docker"],
		demoUrl: "http://ec2-3-144-116-12.us-east-2.compute.amazonaws.com:8501/",
		githubUrl: "https://github.com/imesh97/bankrpc"
	},
	{
		title: "raphael - ai image editor",
		description: "A SaaS web app that transforms images using external AI models.",
		image: "/assets/projects/cover_raphael.jpeg",
		technologies: ["Next.js", "Cloudinary", "Stripe", "MongoDB", "Clerk", "Zod"],
		demoUrl: "https://raphael.nimsitha.com",
		githubUrl: "https://github.com/imesh97/raphael-ai"
	}
];

interface Experience {
	company: string;
	position: string;
	period: string;
	location: string;
	achievements: string[];
	logo: string;
	site: string;
}

export const EXPERIENCES: Experience[] = [
	{
		company: "SymptomStream",
		position: "Chief Technology Officer",
		period: "Nov. 2024 — Present",
		location: "Hamilton, CA",
		achievements: [
			"Led development of a real-time, AI-powered medical assistant prototype, designed to streamline clinical decision-making and optimize workflow efficiency in emergency rooms.",
			"Secured acceptance into 3 startup accelerator programs, gaining access to mentorship, industry partnerships, and early-stage funding opportunities.",
			"Collaborated with 30+ stakeholders to gather technical requirements, refine system architecture, and ensure alignment with strategic business and clinical objectives.",
			"Directed project to prototype phase by establishing clear technical milestones, managing development timelines, and ensuring timely and high-quality feature delivery."
		],
		logo: "/assets/logo_symptomstream.png",
		site: "https://symptomstream.ca"
	},
	/*   {
    company: "Affinity Auto Group",
    position: "Software Developer",
    period: "Dec. 2024 — Present",
    location: "Remote",
    achievements: [
      "Led the development of an AI-powered CRM prototype for automotive dealerships, focusing on lead management and sales pipeline automation.",
      "Built a responsive Next.js landing page to showcase platform features and collect leads, resulting in a 100% increase in user engagement.",
      "Collaborated with key stakeholder to define technical requirements and system architecture for a specialized automotive CRM solution.",
      "Implemented core MVP features: lead engagement automation through SMS and email, and customer journey mapping.",
    ],
    logo: "/assets/logo_affinity.svg",
    site: "https://affinityautogroup.ca",
  }, */
	{
		company: "Rangara Creations",
		position: "Web Developer",
		period: "June 2023 — Jan. 2024",
		location: "Brampton, CA",
		achievements: [
			"Developed and deployed a commercial web platform, implementing intuitive designs that increased user engagement by 200% and directly converted 10 new regular clients.",
			"Optimized SOC 2-ready database schemas by implementing SQL queries and indexing strategies, reducing query response times by 30% and lowering infrastructure costs by 60%.",
			"Engineered an intuitive, responsive admin interface for managing user accounts, content and permissions, leading to an 80% improvement in operational efficiency for staff.",
			"Built a secure, role-based media management and uploading system, enabling 3x more upload throughput and accelerating content deployment times by 75%."
		],
		logo: "/assets/logo_rangara.png",
		site: "http://rangaracreations.com"
	}
];

export interface Skill {
	name: string;
	category: string;
	img: string;
}

export const SKILLS = [
	{
		name: "Python",
		category: "Backend",
		img: "https://img.icons8.com/fluency/144/python.png"
	},
	{
		name: "HTML",
		category: "Frontend",
		img: "https://img.icons8.com/fluency/144/html-5.png"
	},
	{
		name: "CSS",
		category: "Frontend",
		img: "https://img.icons8.com/fluency/144/css3.png"
	},
	{
		name: "React",
		category: "Frontend",
		img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
	},
	{
		name: "Next.js",
		category: "Frontend",
		img: "https://img.icons8.com/nolan/64/nextjs.png"
	},
	{
		name: "Vite",
		category: "Frontend",
		img: "https://img.icons8.com/fluency/144/vite.png"
	},
	{
		name: "Streamlit",
		category: "Frontend",
		img: "https://img.icons8.com/color/48/streamlit.png"
	},
	{
		name: "Bootstrap",
		category: "Frontend",
		img: "https://img.icons8.com/fluency/144/bootstrap.png"
	},
	{
		name: "Tailwind",
		category: "Frontend",
		img: "https://img.icons8.com/fluency/144/tailwind_css.png"
	},
	{
		name: "Chakra UI",
		category: "Frontend",
		img: "https://img.icons8.com/color/48/chakra-ui.png"
	},
	{
		name: "Motion",
		category: "Frontend",
		img: "/assets/icons/motion.png"
	},
	{
		name: "Java",
		category: "Backend",
		img: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
	},
	{
		name: "C",
		category: "Backend",
		img: "https://img.icons8.com/fluency/144/c-programming.png"
	},
	{
		name: "C++",
		category: "Backend",
		img: "https://img.icons8.com/fluency/144/c-plus-plus-logo.png"
	},
	{
		name: "JavaScript",
		category: "Backend",
		img: "https://img.icons8.com/fluency/144/javascript.png"
	},
	{
		name: "TypeScript",
		category: "Backend",
		img: "https://img.icons8.com/fluency/144/typescript--v2.png"
	},
	{
		name: "Node.js",
		category: "Backend",
		img: "https://img.icons8.com/fluency/144/node-js.png"
	},
	{
		name: "PHP",
		category: "Backend",
		img: "https://img.icons8.com/nolan/64/php-logo.png"
	},
	{
		name: "MySQL",
		category: "Backend",
		img: "https://img.icons8.com/color/48/mysql-logo.png"
	},
	{
		name: "MongoDB",
		category: "Backend",
		img: "https://img.icons8.com/color/48/mongo-db.png"
	},
	{
		name: "PostgreSQL",
		category: "Backend",
		img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-shadow-tal-revivo.png"
	},
	{
		name: "Firebase",
		category: "Backend",
		img: "https://img.icons8.com/color/48/firebase.png"
	},
	{
		name: "Supabase",
		category: "Backend",
		img: "https://img.icons8.com/fluency/144/supabase.png"
	},
	{
		name: "Redis",
		category: "Backend",
		img: "https://img.icons8.com/fluency/144/redis.png"
	},
	{
		name: "Docker",
		category: "DevOps",
		img: "https://img.icons8.com/fluency/144/docker.png"
	},
	{
		name: "Git",
		category: "DevOps",
		img: "https://img.icons8.com/color/48/git.png"
	},
	{
		name: "GitHub",
		category: "DevOps",
		img: "https://img.icons8.com/stickers/50/github.png"
	},
	{
		name: "Bitbucket",
		category: "DevOps",
		img: "https://img.icons8.com/color/48/bitbucket.png"
	},
	{
		name: "AWS",
		category: "DevOps",
		img: "https://img.icons8.com/nolan/64/amazon-web-services.png"
	},
	{
		name: "Vercel",
		category: "DevOps",
		img: "/assets/icons/vercel.png"
	},
	{
		name: "Jira",
		category: "DevOps",
		img: "https://img.icons8.com/color/48/jira.png"
	},
	{
		name: "Visual Studio Code",
		category: "Tools",
		img: "https://img.icons8.com/color/48/visual-studio-code-2019.png"
	},
	{
		name: "Eclipse",
		category: "Tools",
		img: "https://img.icons8.com/office/40/java-eclipse.png"
	},
	{
		name: "IntelliJ IDEA",
		category: "Tools",
		img: "https://img.icons8.com/color/48/intellij-idea.png"
	},
	{
		name: "Linux",
		category: "Tools",
		img: "https://img.icons8.com/color/48/linux--v1.png"
	},
	{
		name: "gRPC",
		category: "Backend",
		img: "/assets/icons/grpc.png"
	},
	{
		name: "Stripe",
		category: "Backend",
		img: "https://img.icons8.com/fluency/144/stripe.png"
	},
	{
		name: "FastAPI",
		category: "Backend",
		img: "/assets/icons/fastapi.png"
	},
	{
		name: "TensorFlow",
		category: "Backend",
		img: "https://img.icons8.com/color/48/tensorflow.png"
	},
	{
		name: "WordPress",
		category: "Tools",
		img: "https://img.icons8.com/fluency/144/wordpress.png"
	},
	{
		name: "Confluence",
		category: "Tools",
		img: "https://img.icons8.com/fluency/144/confluence.png"
	},
	{
		name: "Slack",
		category: "Tools",
		img: "https://img.icons8.com/color/48/slack.png"
	},
	{
		name: "Trello",
		category: "Tools",
		img: "https://img.icons8.com/color/48/trello.png"
	},
	{
		name: "Figma",
		category: "Tools",
		img: "https://img.icons8.com/fluency/144/figma.png"
	},
	{
		name: "UML",
		category: "Tools",
		img: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/external-flow-interface-kiranshastry-lineal-color-kiranshastry.png"
	},
	{
		name: "Microsoft Office",
		category: "Extra",
		img: "https://img.icons8.com/color/48/office-365.png"
	},
	{
		name: "Adobe Photoshop",
		category: "Extra",
		img: "https://img.icons8.com/color/48/adobe-photoshop--v1.png"
	},
	{
		name: "Adobe Premiere Pro",
		category: "Extra",
		img: "https://img.icons8.com/color/48/adobe-premiere-pro--v1.png"
	},
	{
		name: "Leadership",
		category: "Extra",
		img: "https://img.icons8.com/color/48/coach--skin-type-5.png"
	},
	{
		name: "Problem Solving",
		category: "Extra",
		img: "https://img.icons8.com/color/48/brain-3.png"
	},
	{
		name: "Communication",
		category: "Extra",
		img: "https://img.icons8.com/color/48/chat--v1.png"
	},
	{
		name: "Agile / Scrum",
		category: "Extra",
		img: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-scrum-ux-and-ui-flaticons-flat-flat-icons.png"
	}
];

export const SLUGS = [
	"typescript",
	"javascript",
	"dart",
	"java",
	"react",
	"flutter",
	"android",
	"html5",
	"css3",
	"nodedotjs",
	"express",
	"nextdotjs",
	"prisma",
	"amazonaws",
	"postgresql",
	"firebase",
	"nginx",
	"vercel",
	"testinglibrary",
	"jest",
	"cypress",
	"docker",
	"git",
	"jira",
	"github",
	"gitlab",
	"visualstudiocode",
	"androidstudio",
	"sonarqube",
	"figma"
];
