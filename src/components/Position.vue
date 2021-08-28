<template>
	<div id="position">
		<div
			v-for="experience in experiences"
			v-bind:key="experience"
			class="text-start"
		>
			<h4 class="mt-5">🪧{{ experience.name }}</h4>
			<p class="mb-1">
				💻{{ experience.position }} &nbsp; 📅{{ experience.period }}
			</p>
			<Jobdesc v-bind:jobdescs="experience.jobdesc" />
			<Project v-bind:projects="experience.projects" />
		</div>
	</div>
</template>
<script>
import Jobdesc from "@/components/Jobdesc.vue";
import Project from "@/components/Project.vue";
export default {
	name: "Position",
	components: {
		Jobdesc,
		Project,
	},
	data: function() {
		return {};
	},
	props: ["experiences"],
};
</script>
<style scoped>
#position {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
a {
	font-weight: bold;
	color: #42b983;
}
.content {
	border: 3px solid #2c3e50;
	border-radius: 20px;
}
</style>
