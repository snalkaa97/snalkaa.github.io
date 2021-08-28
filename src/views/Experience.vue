<template>
	<div class="Experience">
		<div class="container mt-3">
			<Position v-bind:experiences="experiences" />
		</div>
		<Footer />
	</div>
</template>

<script>
// @ is an alias to /src
import Position from "@/components/Position.vue";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "@/components/Footer.vue";

export default {
	name: "Profile",
	data: function() {
		return {};
	},
	components: {
		Footer,
		Position,
	},
	mounted() {},
	methods: {},
	computed: {
		experiences() {
			return this.$store.state.experiences;
		},
	},
};
</script>
<style scoped></style>
