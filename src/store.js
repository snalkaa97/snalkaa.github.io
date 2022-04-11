import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
window.session_key = "aloalka";
const vuexLocal = new VuexPersistence({
	key: window.session_key,
	storage: window.sessionStorage,
});

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		profile: {
			name: "syaifudin alkatiri",
			image: "../assets/profile_pic.png",
			bio: `I have 3 years experience in web programming and working in that field. I get nationally certified as a Junior Web Developer by the National Professional Certification Agency until 2023. Currently working at Ministry Of State-Owned Enterprises (Kementerian Badan Usaha Milik Negara) as Web Programmer. Before joining SOE, I also have been same career as Web Developer.\n\nI build the web using various PHP framework with some of popular like Laravel and nodeJS, currently my specially is backend position. I still learning various frontend JavaScript frameworks like Vue and React , fyi this web using Vue`,
			email: "sfnalkatiri@gmail.com",
		},
		projects: [
			{
				name: "Pokemon API with ReactJs",
				link: "https://github.com/snalkaa97/pokemon-reactjs",
				description: "Show detail pokemon by consume API from pokeapi.co",
				tag: ["javascript", "reactjs"],
			},
			{
				name: "Pokemon API with VanillaJs",
				link: "https://github.com/snalkaa97/pokemon",
				description: "Show detail pokemon by consume API from pokeapi.co",
				tag: ["javascript"],
			},
			{
				name: "Covid-19 Updates",
				link: "https://github.com/snalkaa97/Perkembangan-Covid19-Javascript",
				description:
					"Covid-19 up to date by consume API from api.kawalcorona.com with vanillaJs",
				tag: ["javascript"],
			},
			{
				name:
					"Decision Support System for the Best Lecturers and Educators FTUMJ",
				link: "https://github.com/snalkaa97/Tugas-Akhir",
				description:
					"Comparison of Simple Additive Weighting method and Weighted Product",
				tag: ["PHP", "CodeIgniter 3", "MySQL"],
			},
		],
		experiences: [
			{
				name: "Kementerian Badan Usaha Milik Negara RI",
				position: "Junior Progammer",
				period: "April 2021 - Current",
				jobdesc: [
					"Build the assigned Web Application",
					"Maintain and make improvements to errors and bugs in the Web Application that are handled.",
				],
				projects: [],
			},
			{
				name: "PT. Berdikari Sarana Teknologi",
				position: "Web Developer",
				period: "September 2020 - Maret 2021",
				jobdesc: [
					"Assisting the development of the Indonesian Ministry of Health's E-BMN Application",
					"Assisting the creation of Point Of Sale (OpenBill) application product",
					"Assisting the creation of Auction Application (PT. Balaing Lelang Internusa)",
				],
				projects: [
					{
						name: "OpenBill",
						link: "https://warkopdjuragan.com/",
						description: "Backend and Frontend",
						tag: ["PHP", "CodeIniter 4", "PostgreSQL", "VueJs"],
						image:
							"https://snalkaa97.github.io/img/portfolio/Screen%20Shot%202020-12-29%20at%2020.10.36.png",
					},
					{
						name: "Auction App",
						link: "https://balisaauction.com/",
						description: "Backend and Frontend",
						tag: ["PHP", "CodeIniter 4", "PostgreSQL"],
						image: "https://snalkaa97.github.io/img/portfolio/balisa.png",
					},
				],
			},
			{
				name: "Universitas Muhammadiyah Jakarta",
				position: "Laboratory Asisstant (Tutor)",
				period: "January 2018 - Agustus 2020",
				jobdesc: [
					"Basic of Programming (C)",
					"Analytical Algorithm (Java)",
					"Data Structure (C)",
					"Web Programming (PHP)",
					"Networking (Cisco Packet Tracer)",
				],
				projects: [],
			},
			{
				name: "Kementerian Lingkungan Hidup dan Kehutanan RI",
				position: "UI/UX",
				period: "November 2018 - February 2019",
				jobdesc: ["Design Dashboard to development monitoring of animals"],
				projects: [],
			},
		],
	},
	mutations: {
		changeProfile(state, payload, event) {
			let index = state.profile.indexOf(payload);
			state.profile[index].name = event;
		},
	},
	getters: {},
	plugins: [vuexLocal.plugin],
});
