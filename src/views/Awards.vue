<template>
	<div class="Awards">
		<div id="nav">
			<router-link to="/Help">Hjelp</router-link> |
			<router-link to="/Inspiration">Inspirasjon</router-link> |
			<router-link to="/Awards">Premier</router-link> |
			<router-link to="/Resources">Ressurser</router-link>
		</div>
		<h1>Premier ⭐️</h1>
		<p>Link til OKR-tracker</p>
	</div>
</template>

<script>

export default {
	name: 'awards',
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style'; // Farger blir hentet herfra

.Awards {
	text-align: left;
}

#nav {

	a {
		color: #2c3e50;
		border-bottom: 0;

		&.router-link-exact-active {
			color: $red;
		}
	}
}

</style>
