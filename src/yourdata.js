// Skills Icons
import htmlIcon from "./images/html.svg";
import cssIcon from "./images/css.svg";
import reactIcon from "./images/react.svg";
import jsIcon from "./images/javascript.svg";
import designIcon from "./images/design.svg";
import codeIcon from "./images/code.svg";

// Social Icon
import github from "./images/github.png";
import medium from "./images/medium.png";
import linkedin from "./images/linkedin.png";

// Projects
import vr from "./images/vr.svg";

export default {
	//(Please Do Not Remove The comma(,) after every variable)
	//Change The Website Template

	//   Header Details ---------------------
	name: "Sanaa",
	headerTagline: [
		//Line 1 For Header
		"Software Developer",
		//Line 2 For Header
		"CS Student",
		//Line 3 For Header
		"Carleton '22",
	],
	//   Header Paragraph
	headerParagraph: "Welcome to my online portfolio!",

	//Contact Email
	contactEmail: "sanaasyed.t@gmail.com",

	// End Header Details -----------------------

	// Work Section ------------------------
	projects: [
		{
			title: "CommonLit Mobile App",
			para:
				"Creating a mobile accessible app for over 300,000 students in Latin America to access eduational resources from CommonLit.",
			imageSrc: "https://assets.clever.com/resource-icons/apps/5a70a746e8b1d100017d06fa/icon_5d305ed.png",
			url: "",
		},
		{
			title: "30 days of Cloud",
			para: "Created a program to help over 1500 students across North America get Google Cloud certifications.",
			imageSrc: "https://developers.google.com/community/gdsc/images/stories/csed-week.png",
			url: "https://cloudcoach.dev/home",
		},
		{
			title: "AR/VR Minecraft",
			para: "Experimenting with AFrame and Virtual Reality to create an interactive interface.",
			imageSrc: vr,
			url: "https://sanaa-minecraft-demo.glitch.me/",
		},
		{
			title: "Pomodoro Timer",
			para: "A technique used to study better - 25 minutes study/work, 5 minutes break.",
			imageSrc:
				"https://res.cloudinary.com/practicaldev/image/fetch/s--UQ54H6Gb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o5gk6n2wypy84mh7gnrc.png",
			url: "https://sanaa-pomodoro-timer.herokuapp.com/",
		},
		{
			title: "Spotify Automated",
			para: "Automatically transfer your youtube playlists into your Spotify app.",
			imageSrc: "https://cdn.mos.cms.futurecdn.net/bYYiSCS5awcRfhEsFgdoyh-480-80.jpg",
			url: "https://github.com/sanaasy/spotify-automated",
		},
		{
			title: "Blog",
			para: "A ruby on rails and react application that allows user to mimic blog functionalities.",
			imageSrc: "https://www.dreamhost.com/blog/wp-content/uploads/2019/01/Blog-experts-opt-750x498.jpg",
			url: "https://github.com/sanaasy/Blog",
		},
	],

	// End Work Section -----------------------

	// About Secton --------------
	aboutParaOne:
		"Hi there! My name is Sanaa. I'm a Dev Degree intern and Production Engineer at Shopify and a junior at Carleton University studying Computer Science and Business. Dev Degree is a four year work-integrated learning program with Shopify. We got through training and four placements throughout the four years to experience the various disciplines and teams that Shopify and the tech industry has to offer.",
	aboutParaTwo:
		"Outside of work and school, I am an active lead in driving social impact and supporting/guiding girls into STEM fields and an advocate for bringing tech to everyone. I do so through my work as the Vice President of the Google Developer Student Club chapter at my university, my coaching in the STEMing UP program (of which I was a participant in back in 2018) and working on a mobile app to bring CommonLits educational resources to help those with limited internet access in Latin America.",
	aboutParaThree:
		"In my free time, you can find me playing the guitar, writing or spending time outside. Some of my current interests have been learning about product management, Augmented and Virtual Reality and the design world! ",
	aboutImage: "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png",

	//   End About Section ---------------------

	// Skills Section ---------------

	skills: [
		{
			img: reactIcon,
			para: "",
		},
		{
			img: codeIcon,
			para: "",
		},
		{
			img: jsIcon,
			para: "",
		},
		{
			img: htmlIcon,
			para: "",
		},
		{
			img: designIcon,
			para: "",
		},
		{
			img: cssIcon,
			para: "",
		},
	],

	// End Skills Section --------------------------

	//   Promotion Section --------------------------

	promotionHeading: "What I'm up to",
	promotionPara: [
		"- Working as a production engineer at Shopify",
		"- Building a mobile app for CommonLit (Menon Fellowship)",
		"- VP of my school's Google Developer Student Club",
	],
	// End Promotion Section -----------------

	//   Contact Section --------------

	contactSubHeading: "Find me at",
	social: [
		// Add Or Remove The Link Accordingly
		{ img: github, url: "https://github.com/sanaasy" },
		{
			img: linkedin,
			url: "https://www.codepen.com/",
		},
		{
			img: medium,
			url: "https://dribbble.com/chetanverma",
		},
	],

	// End Contact Section ---------------
};

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
