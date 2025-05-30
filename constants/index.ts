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
	}
];

export const SOCIALS = [
	{
		name: "GitHub",
		url: "https://github.com/csn1434/",
		icon: "https://img.icons8.com/3d-fluency/94/github.png"
	},
	{
		name: "Email",
		url: "mailto:csv1434@gmail.com",
		icon: "https://img.icons8.com/3d-fluency/94/mail.png"
	},
	{
		name: "X",
		url: "https://x.com/csn1434",
		icon: "https://img.icons8.com/fluency/144/twitterx--v1.png"
	}
];

export const ROAD_MAP = [
	{
		name: "Docker",
		icon: "/assets/docker.svg",
		describe: "애플리케이션을 컨테이너 단위로 격리하고 이식성 있게 배포하기 위해 학습중 입니다."
	},
	{
		name: "CI/CD",
		icon: "/assets/jenkins.svg",
		describe: "코드 변경 사항을 자동으로 테스트하고 배포하기 위한 자동화 파이프라인 구성하기위해 학습 예정입니다."
	},
	{
		name: "Kubernetes",
		icon: "/assets/kubernetes.svg",
		describe: "컨테이너 오케스트레이션을 배워 안정성과 확장성을 갖춘 운영 인프라를 구현하기 위해 학습 예정입니다."
	},
	{
		name: "AWS",
		icon: "/assets/aws.svg",
		describe:
			"클라우드 인프라 환경에서 서비스를 구축하고 운영하기 위해 AWS의 주요 서비스(EC2, S3, IAM, VPC 등)를 학습 예정입니다."
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
		githubUrl: "https://github.com/csn1434/nexusquiz"
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
		demoUrl: "https://github.com/csn1434/tunetype/blob/main/report.pdf",
		githubUrl: "https://github.com/csn1434/tunetype",
		demoUrlText: "report"
	},
	{
		title: "bankrpc - distributed banking",
		description: "A distributed banking system with data persistence and transaction concurrency.",
		image: "/assets/projects/cover_bankrpc.jpeg",
		technologies: ["Python", "Streamlit", "gRPC", "Redis", "AWS EC2", "Docker"],
		demoUrl: "http://ec2-3-144-116-12.us-east-2.compute.amazonaws.com:8501/",
		githubUrl: "https://github.com/csn1434/bankrpc"
	},
	{
		title: "raphael - ai image editor",
		description: "A SaaS web app that transforms images using external AI models.",
		image: "/assets/projects/cover_raphael.jpeg",
		technologies: ["Next.js", "Cloudinary", "Stripe", "MongoDB", "Clerk", "Zod"],
		demoUrl: "https://raphael.nimsitha.com",
		githubUrl: "https://github.com/csn1434/raphael-ai"
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
		company: "Techvile (주)테크빌",
		position: "Software Developer",
		period: "2018 - 2020",
		location: "서울시 영등포구 버드나루로 12가길 ",
		achievements: [
			"Led development of a real-time, AI-powered medical assistant prototype, designed to streamline clinical decision-making and optimize workflow efficiency in emergency rooms.",
			"Secured acceptance into 3 startup accelerator programs, gaining access to mentorship, industry partnerships, and early-stage funding opportunities.",
			"Collaborated with 30+ stakeholders to gather technical requirements, refine system architecture, and ensure alignment with strategic business and clinical objectives.",
			"Directed project to prototype phase by establishing clear technical milestones, managing development timelines, and ensuring timely and high-quality feature delivery."
		],
		logo: "/assets/logo_symptomstream.png",
		site: "http://techville.biz/"
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
		company: "ZeroOne AI",
		position: "Web Developer - Front-end",
		period: "2023 — 2024",
		location: "경기 성남시 수정구 창업로 43",
		achievements: [
			"Developed and deployed a commercial web platform, implementing intuitive designs that increased user engagement by 200% and directly converted 10 new regular clients.",
			"Optimized SOC 2-ready database schemas by implementing SQL queries and indexing strategies, reducing query response times by 30% and lowering infrastructure costs by 60%.",
			"Engineered an intuitive, responsive admin interface for managing user accounts, content and permissions, leading to an 80% improvement in operational efficiency for staff.",
			"Built a secure, role-based media management and uploading system, enabling 3x more upload throughput and accelerating content deployment times by 75%."
		],
		logo: "/assets/logo_rangara.png",
		site: "https://www.zeroone.ai/"
	},
	{
		company: "Mario Outlet",
		position: "System Management",
		period: "2023 — 2024",
		location: "경기 성남시 수정구 창업로 43",
		achievements: [
			"Developed and deployed a commercial web platform, implementing intuitive designs that increased user engagement by 200% and directly converted 10 new regular clients.",
			"Optimized SOC 2-ready database schemas by implementing SQL queries and indexing strategies, reducing query response times by 30% and lowering infrastructure costs by 60%.",
			"Engineered an intuitive, responsive admin interface for managing user accounts, content and permissions, leading to an 80% improvement in operational efficiency for staff.",
			"Built a secure, role-based media management and uploading system, enabling 3x more upload throughput and accelerating content deployment times by 75%."
		],
		logo: "/assets/logo_rangara.png",
		site: "https://www.zeroone.ai/"
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
		name: "C#",
		category: "Backend",
		img: "https://img.icons8.com/?size=100&id=55251&format=png&color=000000"
	},
	{
		name: "Delphi",
		category: "Backend",
		img: "https://img.icons8.com/?size=100&id=Lz7oiCpdanST&format=png&color=000000"
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
		name: "MySQL",
		category: "Backend",
		img: "https://img.icons8.com/color/48/mysql-logo.png"
	},
	{
		name: "Microsoft SQL Server",
		category: "Backend",
		img: "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000"
	},

	{
		name: ".NET",
		category: "Backend",
		img: "https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000"
	},
	{
		name: "Docker",
		category: "DevOps",
		img: "https://img.icons8.com/fluency/144/docker.png"
	},
	{
		name: "Kubernates",
		category: "DevOps",
		img: "https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000"
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
		name: "AWS",
		category: "DevOps",
		img: "https://img.icons8.com/nolan/64/amazon-web-services.png"
	},
	{
		name: "Vercel",
		category: "DevOps",
		img: "/assets/vercel.svg"
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
		name: "WordPress",
		category: "Tools",
		img: "https://img.icons8.com/fluency/144/wordpress.png"
	},
	{
		name: "Slack",
		category: "Tools",
		img: "https://img.icons8.com/color/48/slack.png"
	},
	{
		name: "Postman",
		category: "Tools",
		img: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000"
	},
	{
		name: "Figma",
		category: "Tools",
		img: "https://img.icons8.com/fluency/144/figma.png"
	},
	{
		name: "Microsoft Office",
		category: "Extra",
		img: "https://img.icons8.com/color/48/office-365.png"
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
