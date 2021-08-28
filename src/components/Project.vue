<template>
	<div class="project">
		<div class="container mt-3">
			<div v-for="project in projects" v-bind:key="project">
				<div class="content p-3 mt-2">
					<div class="text-start">
						<a
							v-bind:href="project.link"
							target="_blank"
							rel="noopener noreferrer"
							class="text-decoration-none"
						>
							<h4>{{ project.name }}</h4>
						</a>
						<p>📄{{ project.description }}</p>
						<a
							v-bind:href="project.link"
							target="_blank"
							rel="noopener noreferrer"
							class="text-decoration-none"
						>
							🔗{{ project.link }}
						</a>
						<div v-for="tag in project.tag" v-bind:key="tag" class="d-inline">
							<a href="javascript:void(0)">
								<span class="badge rounded-pill text-warning">#{{ tag }}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Project",
	data: function() {
		return {};
	},
	props: ["projects"],
};
</script>
<style scoped>
#project {
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
