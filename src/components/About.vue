<template>
	<div class="about">
		<div class="container mt-3">
			<div class="content p-5">
				<div class="row">
					<div class="col-lg-1 col-sm-12">
						<div class="flex-shrink-0">
							<img class="user-pic mr-3" src="../assets/alka1.jpg" alt="" />
						</div>
					</div>
					<div class="col-lg-11 col-sm-12">
						<div class="flex-grow-1 ms-3 text-start">
							<b>Hi 👋, I am {{ profil.name }}</b>
							<br />
							{{ profil.bio }}
							Now you can call me <b>Alka</b>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
	name: "About",
	data: function() {
		return {};
	},
	props: ["profil"],
	computed: {
		profile() {
			return this.$store.profile;
		},
	},
};
</script>
<style>
.user-pic {
	height: 80px;
	widows: 80px;
	border-radius: 200%;
}
.content {
	border: 3px solid #2c3e50;
	border-radius: 20px;
}
</style>
