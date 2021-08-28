<template>
	<div class="portfolio">
		<Project v-bind:projects="projects" />
		<Footer />
	</div>
</template>

<script>
// @ is an alias to /src
import "bootstrap/dist/css/bootstrap.css";
import Project from "@/components/Project.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "Profile",
	data: function() {
		return {};
	},
	components: {
		Project,
		Footer,
	},
	mounted() {},
	methods: {},
	computed: {
		projects() {
			return this.$store.state.projects;
		},
		experiences() {
			return this.$store.state.experiences;
		},
	},
};
</script>
<style scoped></style>
