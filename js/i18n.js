(function () {
	'use strict';

	var storageKey = 'preferredLanguage';
	var defaultLanguage = 'es';

	var translations = {
		es: {
			metaTitle: 'David Rojo | Senior Backend Developer',
			metaDescription: 'Senior Backend Developer especializado en Java, Spring Boot, APIs, Docker y sistemas Linux, con experiencia en proyectos internacionales e innovación.',
			ogLocale: 'es_ES',
			languageSwitcherLabel: 'Selector de idioma',
			skipContent: 'Saltar al contenido',
			mainNavLabel: 'Navegación principal',
			menuOpen: 'Abrir menú',
			menuClose: 'Cerrar menú',
			navAbout: 'Sobre mi',
			navSkills: 'Habilidades',
			navExperience: 'Experiencia',
			navLanguages: 'Idiomas',
			navEducation: 'Educación',
			navClients: 'Clientes',
			navInterests: 'Intereses',
			navContact: 'Contacto',
			linkedinLabel: 'LinkedIn de David Rojo',
			githubLabel: 'GitHub de David Rojo',
			emailLabel: 'Enviar email a David Rojo',
			nationalityLabel: 'Nacionalidad:',
			nationalityValue: 'Española',
			locationLabel: 'Ubicación:',
			locationMadrid: 'Madrid (España)',
			locationBarcelona: 'Barcelona (España)',
			aboutGreeting: '¡Hola! Soy David Rojo Antona',
			aboutIntro: 'Programador senior analítico y bien organizado con 18 años de experiencia en investigación e innovación, diseño, análisis, desarrollo y despliegue de productos de software, con requisitos flexibles, en un entorno internacional.',
			aboutCurrent: 'Actualmente trabajo en <a href="https://www.kairosds.com/" target="_blank" rel="noopener noreferrer">Kairós Digital Solutions</a> como Senior Backend Developer, competente en desarrollo backend con Java, Spring Boot, contenedores docker, uso de AsyncAPI y OpenAPI para definir de una forma clara y limpia las APIs, sistemas Unix/Linux y bases de datos tanto relacionales (MySQL) como NoSQL (MongoDB).',
			aboutCollaboration: 'Capaz de trabajar en colaboración y con supervisión limitada, de exponer y presentar el trabajo realizado ante una audiencia y con experiencia real en proyectos de innovación para la Comisión Europea durante 7 años.',
			aboutImprovement: 'Estoy interesado en mejorar constantemente mis habilidades, fortalecer mis conocimientos actuales y aplicar nuevas técnicas y estrategias para lograr los mejores resultados.',
			contactButton: 'Contacto',
			skillsTitle: 'Habilidades',
			technicalSkills: 'Técnicas',
			personalSkills: 'Personales',
			skillCollaboration: 'Colaboración',
			skillCollaborationAria: 'Colaboración: 93%',
			skillCommunication: 'Comunicación',
			skillCommunicationAria: 'Comunicación: 92%',
			skillProblemSolving: 'Resolución de Problemas',
			skillProblemSolvingAria: 'Resolución de Problemas: 95%',
			skillAdaptability: 'Capacidad de Adaptación',
			skillAdaptabilityAria: 'Capacidad de Adaptación: 90%',
			skillMultitasking: 'Multitarea',
			skillMultitaskingAria: 'Multitarea: 83%',
			skillCreativity: 'Creatividad',
			skillCreativityAria: 'Creatividad: 80%',
			experienceTitle: 'Experiencia',
			date2020Present: '2020-Presente',
			experienceKairosIntro: 'Miembro del equipo de desarrollo en proyectos para <a href="https://www.inditex.com/es/home" target="_blank" rel="noopener noreferrer">Inditex</a>.',
			experienceAtosCybersecurityIntro: 'Miembro de la unidad de Ciberseguridad encargado principalmente de tareas de seguridad en diferentes proyectos pertenecientes al Programa de Investigación e Innovación de la Unión Europea <a href="https://cordis.europa.eu/programme/id/H2020" target="_blank" rel="noopener noreferrer">H2020</a> (2014-2020).',
			experienceAtosCybersecurityLead: 'Liderando el análisis, diseño, desarrollo, despliegue y mantenimiento de nuevos componentes para los proyectos con viajes frecuentes a nivel europeo por necesidades de los mismos.',
			experienceAtosCybersecurityEnglish: 'Uso del inglés como idioma principal tanto en la elaboración de documentación y entregables para la Comisión Europea, como en los correos, teleconferencias y reuniones presenciales.',
			experienceAtosItIntro: 'Miembro del sector de Tecnologías de la Información dedicado a aspectos relacionados a la virtualización, Green IT y testeo en proyectos de los Programas de Investigación e Innovación de la Unión Europea <a href="https://cordis.europa.eu/programme/id/FP7" target="_blank" rel="noopener noreferrer">FP7</a> (2007-2013) y <a href="https://cordis.europa.eu/programme/id/H2020" target="_blank" rel="noopener noreferrer">H2020</a> (2014-2020).',
			experienceAtosItDevelopment: 'Desarrollo, despliegue y mantenimiento de nuevos componentes para los proyectos con viajes frecuentes a nivel europeo por necesidades de los mismos.',
			experienceAtosItEnglish: 'Uso del inglés como idioma principal tanto en la contribución de documentación y entregables para la Comisión Europea, como en los correos, teleconferencias y reuniones presenciales.',
			experienceEchaIntro: 'Miembro del equipo de desarrollo de la aplicación Odyssey para la <a href="https://echa.europa.eu" target="_blank" rel="noopener noreferrer">Agencia Química Europea (ECHA)</a>, destinada para el uso interno de sus trabajadores como sistema experto para dar soporte y llevar a cabo la gestión de los distintos dossiers tramitados por el personal de la agencia.',
			experienceEchaDevelopment: 'Desarrollo de nuevas funcionalidades y mantenimiento de una aplicación web Java y generación y mantenimiento de la documentación del proyecto.',
			experienceTiwsIntro: 'Miembro del equipo de desarrollo de INDALO, una aplicación web basada en Java usando como entorno de desarrollo Eclipse para <a href="https://globalsolutions.telefonica.com/es/" target="_blank" rel="noopener noreferrer">Telefonica International Wholesale Services (TIWS)</a>, integrado con IBM Tivoli Netcool Configuration Manager (ITNCM), lo que permite la configuración y el inventario de diferentes recursos de red (como routers y switches) de diferentes fabricantes.',
			experienceTiwsDevelopment: 'Desarrollo de nuevas funcionalidades y mantenimiento de la aplicación y generación de informes y documentación del proyecto.',
			experienceTiwsSupport: 'Soporte 24x7 en disponibilidad telefónica con la posibilidad de conexión remota para el correcto funcionamiento y control de la plataforma, desplegada en máquinas virtuales Linux RedHat sobre un entorno VMware.',
			experienceRaonaIntro: 'Desarrollo de aplicaciones con tecnologías Microsoft siendo miembro de los equipos de desarrollo para clientes como <a href="https://www.seguroscatalanaoccidente.com/" target="_blank" rel="noopener noreferrer">Catalana Occidente</a> y <a href="https://www.apabcn.cat/" target="_blank" rel="noopener noreferrer">Colegio de Aparejadores y Arquitectos Técnicos de Barcelona</a>.',
			experienceIndraIntro: 'Miembro del equipo de Gestión de Usuarios encargado de solucionar remotamente las incidencias con el correo corporativo, gestión del acceso a internet, migraciones de datos y solicitudes de acceso a aplicaciones institucionales y departamentales de acuerdo a las necesidades de los usuarios finales, los empleados de la Agencia para la Administración Digital de la Comunidad de Madrid (ICM), llamada actualmente <a href="https://www.comunidad.madrid/servicios/sede-electronica/madrid-digital" target="_blank" rel="noopener noreferrer">Madrid Digital</a>.',
			technologiesUsed: 'Tecnologías usadas:',
			hexagonalArchitecture: 'Arquitectura Hexagonal',
			projectsLabel: 'Proyectos:',
			andWord: 'y',
			developerRole: 'Desarrollador',
			softwareEngineerRole: 'Ingeniero Software',
			itOperatorRole: 'Operador IT',
			languagesTitle: 'Idiomas',
			spanishLanguage: 'Español',
			nativeLevel: 'Nativo',
			englishLanguage: 'Inglés',
			educationTitle: 'Educación',
			masterCloudApps: 'Master CloudApps: Desarrollo y Despliegue de Aplicaciones en la Nube',
			webPlatformsExpert: 'Experto en Plataformas y Aplicaciones Web',
			technicalEngineering: 'Ingeniería Técnica en Informática de Sistemas',
			clientsTitle: 'Clientes',
			allFilter: 'Todos',
			europeanCommission: 'Comisión Europea',
			europeanChemicalsAgency: 'Agencia Química Europea',
			telefonicaUrl: 'https://www.telefonica.com/es/home',
			viewWeb: 'Ver web',
			interestsTitle: 'Intereses',
			interestScuba: 'Submarinismo',
			interestGraphicDesign: 'Diseño Gráfico',
			interestTravelling: 'Viajar',
			interestMotorbikes: 'Motos',
			contactTitle: 'Contacto',
			footerDevelopedBy: 'Desarrollado por',
			footerRights: 'Todos los derechos reservados',
			cookieSettings: 'Configurar cookies',
			cookieNoticeTitle: 'Privacidad y analítica',
			cookieNoticeText: 'Este sitio usa Google Analytics para entender el uso de la web y mejorarla. Puedes aceptar o rechazar la analítica no necesaria.',
			cookieAccept: 'Aceptar',
			cookieReject: 'Rechazar'
		},
		en: {
			metaTitle: 'David Rojo | Senior Backend Developer',
			metaDescription: 'Senior backend developer specialized in Java, Spring Boot, APIs, Docker and Linux systems, with experience in international and innovation projects.',
			ogLocale: 'en_GB',
			languageSwitcherLabel: 'Language selector',
			skipContent: 'Skip to content',
			mainNavLabel: 'Main navigation',
			menuOpen: 'Open menu',
			menuClose: 'Close menu',
			navAbout: 'About',
			navSkills: 'Skills',
			navExperience: 'Experience',
			navLanguages: 'Languages',
			navEducation: 'Education',
			navClients: 'Clients',
			navInterests: 'Interests',
			navContact: 'Contact Me',
			linkedinLabel: 'David Rojo on LinkedIn',
			githubLabel: 'David Rojo on GitHub',
			emailLabel: 'Send email to David Rojo',
			nationalityLabel: 'Nationality:',
			nationalityValue: 'Spanish',
			locationLabel: 'Location:',
			locationMadrid: 'Madrid (Spain)',
			locationBarcelona: 'Barcelona (Spain)',
			aboutGreeting: 'Hello! I’m David Rojo Antona',
			aboutIntro: 'Analytical and well-organized senior developer with 18 years of experience in research & innovation, design, analysis, development and deployment of software products with flexible requirements in an international environment.',
			aboutCurrent: 'Currently working in <a href="https://www.kairosds.com/" target="_blank" rel="noopener noreferrer">Kairós Digital Solutions</a> as Senior Backend Developer, proficient in Java backend development, Spring Boot, docker containerization, AsyncAPI and OpenAPI usage to clearly define APIs, Unix/Linux systems and relational (MySQL) and NoSQL (MongoDB) databases.',
			aboutCollaboration: 'Able to work collaboratively and with limited supervision, to expose and present the done job to an audience and with real experience in innovation projects for the European Commission during seven years.',
			aboutImprovement: 'I am interested in constantly improving my skills, strengthening my current knowledge and applying new techniques and strategies to achieve the best results.',
			contactButton: 'Contact Me',
			skillsTitle: 'Skills',
			technicalSkills: 'Technical',
			personalSkills: 'Personal',
			skillCollaboration: 'Collaboration',
			skillCollaborationAria: 'Collaboration: 93%',
			skillCommunication: 'Communication',
			skillCommunicationAria: 'Communication: 92%',
			skillProblemSolving: 'Problem Solving',
			skillProblemSolvingAria: 'Problem Solving: 95%',
			skillAdaptability: 'Adaptability',
			skillAdaptabilityAria: 'Adaptability: 90%',
			skillMultitasking: 'Multitasking',
			skillMultitaskingAria: 'Multitasking: 83%',
			skillCreativity: 'Creativity',
			skillCreativityAria: 'Creativity: 80%',
			experienceTitle: 'Experience',
			date2020Present: '2020-Present',
			experienceKairosIntro: 'Member of development team in projects for <a href="https://www.inditex.com/en/home" target="_blank" rel="noopener noreferrer">Inditex</a>.',
			experienceAtosCybersecurityIntro: 'Member of Cybersecurity Unit in charge of security tasks in projects for European Union Research and Innovation Programme <a href="https://cordis.europa.eu/programme/id/H2020" target="_blank" rel="noopener noreferrer">H2020</a> (2014-2020).',
			experienceAtosCybersecurityLead: 'Leading analysis, design, development, deployment and maintenance of new components for the projects with frequent trips to European level due to the projects.',
			experienceAtosCybersecurityEnglish: 'Elaboration of documentation and deliverables for the European Commission.',
			experienceAtosItIntro: 'Member of Information Technology sector focused in cloud computing, Green IT, virtualization and testing activities for European Union Research and Innovation Programmes <a href="https://cordis.europa.eu/programme/id/FP7" target="_blank" rel="noopener noreferrer">FP7</a> (2007-2013) and <a href="https://cordis.europa.eu/programme/id/H2020" target="_blank" rel="noopener noreferrer">H2020</a> (2014-2020) projects.',
			experienceAtosItDevelopment: 'Development, deployment and maintenance of new components for the projects with frequent trips to European level due to the projects.',
			experienceAtosItEnglish: 'Contribution to documentation and deliverables for the European Commission.',
			experienceEchaIntro: 'Member of development team of Odyssey application for <a href="https://echa.europa.eu" target="_blank" rel="noopener noreferrer">European Chemicals Agency (ECHA)</a>, intended for internal use as an expert system to support and streamline everyday dossier tasks carried by the agency\'s staff.',
			experienceEchaDevelopment: 'New features development and maintenance of Java web application and generation of project documentation.',
			experienceTiwsIntro: 'Member of development team of INDALO, a web application Java based using IDE Eclipse for <a href="https://globalsolutions.telefonica.com/en/" target="_blank" rel="noopener noreferrer">Telefonica International Wholesale Services (TIWS)</a>, integrated with IBM Tivoli Netcool Configuration Manager (ITNCM), that allows the configuration and the inventory of different network resources (such as routers and switches) from different manufacturers.',
			experienceTiwsDevelopment: 'New features development and maintenance of Java web application and generation and maintenance of project documentation and reports.',
			experienceTiwsSupport: '24x7 support in telephone availability with possibility of remote connection for right performance and control of the platform which was deployed on a Linux RedHat environment of VMware virtual machines.',
			experienceRaonaIntro: 'Application development with Microsoft technologies being member of development team for clients such as <a href="https://www.seguroscatalanaoccidente.com/" target="_blank" rel="noopener noreferrer">Catalana Occidente</a> and <a href="https://www.apabcn.cat/" target="_blank" rel="noopener noreferrer">Colegio de Aparejadores y Arquitectos Técnicos de Barcelona</a>.',
			experienceIndraIntro: 'Member of User Management team in charge of solving issues remotely with corporate email, internet access management, data migrations and access requests to institutional and departmental applications according to the needs of the end users, Agency for the Digital Administration of the Community of Madrid (ICM), currently called <a href="https://www.comunidad.madrid/servicios/sede-electronica/madrid-digital" target="_blank" rel="noopener noreferrer">Madrid Digital</a>, employees.',
			technologiesUsed: 'Technologies used:',
			hexagonalArchitecture: 'Hexagonal Architecture',
			projectsLabel: 'Projects:',
			andWord: 'and',
			developerRole: 'Developer',
			softwareEngineerRole: 'Software Engineer',
			itOperatorRole: 'IT Operator',
			languagesTitle: 'Languages',
			spanishLanguage: 'Spanish',
			nativeLevel: 'Native',
			englishLanguage: 'English',
			educationTitle: 'Education',
			masterCloudApps: 'Master CloudApps: Development and Deployment of Applications in the Cloud',
			webPlatformsExpert: 'Expert in Platforms and Web Applications',
			technicalEngineering: 'Technical Engineering in Computer Systems',
			clientsTitle: 'Clients',
			allFilter: 'All',
			europeanCommission: 'European Commission',
			europeanChemicalsAgency: 'European Chemicals Agency',
			telefonicaUrl: 'https://www.telefonica.com/en/home',
			viewWeb: 'View Web',
			interestsTitle: 'Interests',
			interestScuba: 'Scuba Diving',
			interestGraphicDesign: 'Graphic Design',
			interestTravelling: 'Travelling',
			interestMotorbikes: 'Motorbikes',
			contactTitle: 'Contact Me',
			footerDevelopedBy: 'Developed by',
			footerRights: 'All rights reserved',
			cookieSettings: 'Cookie settings',
			cookieNoticeTitle: 'Privacy and analytics',
			cookieNoticeText: 'This site uses Google Analytics to understand how the website is used and improve it. You can accept or reject non-essential analytics.',
			cookieAccept: 'Accept',
			cookieReject: 'Reject'
		}
	};

	function getStoredLanguage() {
		try {
			return localStorage.getItem(storageKey);
		} catch (error) {
			return null;
		}
	}

	function setStoredLanguage(language) {
		try {
			localStorage.setItem(storageKey, language);
		} catch (error) {
			// Language switching must still work when storage is unavailable.
		}
	}

	function setMeta(selector, attribute, value) {
		var element = document.querySelector(selector);
		if (element) {
			element.setAttribute(attribute, value);
		}
	}

	function updateStructuredData(dictionary, language) {
		var element = document.querySelector('script[type="application/ld+json"]');
		if (!element) {
			return;
		}

		try {
			var data = JSON.parse(element.textContent);
			data.name = dictionary.metaTitle;
			data.description = dictionary.metaDescription;
			data.inLanguage = language;
			data.url = 'https://davidrojo.eu/';

			if (data.mainEntity) {
				data.mainEntity.url = 'https://davidrojo.eu/';
			}

			element.textContent = JSON.stringify(data, null, 2);
		} catch (error) {
			// Keep the static JSON-LD if it cannot be parsed for any reason.
		}
	}

	function applyLanguage(language) {
		var selectedLanguage = translations[language] ? language : defaultLanguage;
		var dictionary = translations[selectedLanguage];

		document.documentElement.lang = selectedLanguage;
		document.title = dictionary.metaTitle;
		setMeta('meta[name="description"]', 'content', dictionary.metaDescription);
		setMeta('meta[property="og:title"]', 'content', dictionary.metaTitle);
		setMeta('meta[property="og:description"]', 'content', dictionary.metaDescription);
		setMeta('meta[name="twitter:title"]', 'content', dictionary.metaTitle);
		setMeta('meta[name="twitter:description"]', 'content', dictionary.metaDescription);
		setMeta('meta[property="og:locale"]', 'content', dictionary.ogLocale);
		updateStructuredData(dictionary, selectedLanguage);

		document.querySelectorAll('[data-i18n]').forEach(function (element) {
			var key = element.getAttribute('data-i18n');
			if (dictionary[key]) {
				element.textContent = dictionary[key];
			}
		});

		document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
			var key = element.getAttribute('data-i18n-html');
			if (dictionary[key]) {
				element.innerHTML = dictionary[key];
			}
		});

		document.querySelectorAll('[data-i18n-attr]').forEach(function (element) {
			element.getAttribute('data-i18n-attr').split(';').forEach(function (definition) {
				var parts = definition.split(':');
				var attribute = parts[0];
				var key = parts[1];

				if (attribute && key && dictionary[key]) {
					element.setAttribute(attribute, dictionary[key]);
				}
			});
		});

		document.querySelectorAll('.language-switch-btn').forEach(function (button) {
			var isActive = button.getAttribute('data-lang') === selectedLanguage;
			button.classList.toggle('active', isActive);
			button.setAttribute('aria-pressed', String(isActive));
		});
	}

	window.applySiteLanguage = applyLanguage;
	window.getSiteLanguage = function () {
		return document.documentElement.lang || defaultLanguage;
	};

	document.addEventListener('DOMContentLoaded', function () {
		var initialLanguage = getStoredLanguage() || defaultLanguage;
		applyLanguage(initialLanguage);

		document.querySelectorAll('.language-switch-btn').forEach(function (button) {
			button.addEventListener('click', function () {
				var language = button.getAttribute('data-lang');
				setStoredLanguage(language);
				applyLanguage(language);
			});
		});
	});
}());
