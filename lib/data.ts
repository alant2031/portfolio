import { createElement } from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { TbCertificate } from 'react-icons/tb';

import gpanel from '@/public/gp.png';
import cars from '@/public/cars.png';
import learning_log from '@/public/LL.png';
import node_api from '@/public/api.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'Sobre',
		hash: '#about',
	},
	{
		name: 'Projetos',
		hash: '#projects',
	},
	{
		name: 'Habilidades',
		hash: '#skills',
	},
	{
		name: 'Experiências',
		hash: '#experience',
	},
	{
		name: 'Contato',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Formação Web Full Stack',
		location: 'Trybe',
		description:
			'Com mais de 1400 horas de aula em um ano, aprimorei fundamentos sobre aplicações web com HTML, CSS, JavaScript e React. No back-end, criei projetos com Node.js e Express, e trabalhei com bancos de dados relacionais e não relacionais. Também adquiri conhecimentos sobre testes com Mocha, Chai e Python. Além das habilidades técnicas, também desenvolvi soft skills importantes, como trabalho em equipe, comunicação e autogestão.',
		icon: createElement(TbCertificate),
		date: '2021 - 2022',
	},
	{
		title: 'Desenvolvedor Front-end',
		location: 'Ubistart',
		description:
			'Desenvolvimento de código. Design responsivo. Otimizar o desempenho das páginas web. Trabalhar em estreita colaboração com designers, desenvolvedores e outros membros da equipe para garantir a integração adequada da aplicação.',
		icon: createElement(CgWorkAlt),
		date: '10/2021 - 06/2022',
	},
	{
		title: 'Desenvolvedor Back-end',
		location: 'Grupo Fornecedora',
		description:
			'Trabalhar com APIs de terceiros, integrando-as ao aplicativo para acessar dados externos ou serviços. Realizar manutenção contínua do aplicativo, corrigindo problemas, fazendo melhorias e atualizando recursos conforme necessário.',
		icon: createElement(CgWorkAlt),
		date: '06/2022 - 01/2023',
	},
] as const;

export const projectsData = [
	{
		title: 'Car Showcase',
		description:
			'Website de exposição de carros com pesquisa por fabricante, modelo, ano e mais.',
		tags: ['React', 'Next.js', 'Typescript', 'Tailwind'],
		imageUrl: cars,
		source: 'https://car-showcase-zk.vercel.app/',
	},
	{
		title: 'GPanel',
		description:
			'Painel administrativo interativo com tabelas, formulários, validações, gráficos e uma variedade de elementos para uma experiência completa.',
		tags: ['React', 'Vite', 'Material UI'],
		imageUrl: gpanel,
		source: 'https://gpanel-six.vercel.app/',
	},
	{
		title: 'Users API',
		description:
			'API com banco de dados. Ela possui métodos HTTP para criação, leitura, edição e remoção de recursos. Também contém testes automatizados. ',
		tags: ['Node', 'Typescript', 'Docker', 'MongoDB', 'Mocha'],
		imageUrl: node_api,
		source: 'https://github.com/alant2031/users-ts-api',
	},
	{
		title: 'Learning Log',
		description:
			'Uma aplicação de diário de aprendizado onde os usuários podem criar tópicos e registrar suas entradas, com funcionalidades de autenticação de usuário.',
		tags: ['Python', 'Django', 'Bootstrap'],
		imageUrl: learning_log,
		source: 'https://github.com/alant2031/LearningLog',
	},
] as const;

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Tailwind',
	'Vue',
	'Node.js',
	'Express',
	'Prisma',
	'MySQL',
	'MongoDB',
	'Axios',
	'Jest',
	'Mocha',
	'Python',
	'Django',
	'Flask',
	'GraphQL',
	'Git',
	'Docker',
	'Supabase',
	'AWS',
] as const;
