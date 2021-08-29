<template>
	<div class="about">
		<div class="container mt-3">
			<div class="content p-5">
				<div class="row">
					<div class="col-lg-1 col-sm-12">
						<div class="flex-shrink-0">
							<img
								class="user-pic mr-3"
								src="../assets/profile_pic.png"
								alt=""
							/>
						</div>
					</div>
					<div class="col-lg-11 col-sm-12">
						<div class="flex-grow-1 ms-3 text-start">
							<b>Hi 👋, I am {{ profil.name }}</b>
							<br />
							{{ profil.bio }}
							<!-- Now you can call me <b>Alka</b> -->
							<br />
							<a
								class="text-decoration-none email"
								:href="`mailto:${profil.email}`"
								>📧{{ profil.email }}</a
							>
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
	white-space: pre-line;
	vertical-align: bottom;
}
a {
	font-weight: bold;
	color: #42b983;
}
.email {
	font-family: Avenir, Helvetica, Arial, sans-serif !important;
	-webkit-font-smoothing: antialiased !important;
	-moz-osx-font-smoothing: grayscale !important;
	font-size: 14px;
}
</style>
