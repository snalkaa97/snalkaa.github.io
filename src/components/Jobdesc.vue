<template>
	<div id="jobdesc">
		<div v-for="jobdesc in jobdescs" v-bind:key="jobdesc">
			<li class="list-group-item jobdesc">🟣&nbsp;{{ jobdesc }}</li>
		</div>
	</div>
</template>
<script>
export default {
	name: "Jobdesc",
	data: function() {
		return {};
	},
	props: ["jobdescs"],
};
</script>
<style scoped>
.jobdesc {
	font-size: 12px;
}
</style>
