<template>
	<div class="Awards">
		<div id="nav">
			<router-link to="/Help">Hjelp</router-link> |
			<router-link to="/Inspiration">Inspirasjon</router-link> |
			<router-link to="/Awards">Premier</router-link> |
			<router-link to="/Resources">Ressurser</router-link>
		</div>
		<h1>Premier 🏆️</h1>
		<p>I tillegg til å bli vurdert av en jury vil dere kunne samle inn ekstra poeng og creds om dere gjør noen oppgaver forbundet med løsningen og utviklingen av den. Disse er:</p>
		<br />
		<ul>
			<li>⭐ Brukt/integrert mot ekstern ressurs (API, datasett, Slack, bilde etc.)</li>
			<li>⭐ Brukertestet</li>
			<li>⭐ Integrasjon med annet team sitt produkt</li>
			<li>⭐ Skissert ut flere konsepter</li>
		</ul>
		<br />
		<p>Oppdater disse målene underveis ettersom dere klarer dem i vår eminente <a href="https://okr.oslo.systems/product/hackathon" target="_blank">OKR-tracker</a></p>

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
