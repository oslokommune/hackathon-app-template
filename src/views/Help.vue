<template>
	<div class="Help">
		<div id="nav">
			<router-link to="/Help">Hjelp</router-link> |
			<router-link to="/Inspiration">Inspirasjon</router-link> |
			<router-link to="/Awards">Premier</router-link> |
			<router-link to="/Resources">Ressurser</router-link>
		</div>
		<img alt="clippy" src="https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif" style="position: fixed; bottom: 2em; right: 2em;" />
		<h1>Hjelp</h1>
		<p>
			Eksempler på bruk av følgende komponenter, farger og verktøy finnes i kildekoden til denne filen. Denne
			ligger i
			<a href="https://github.com/oslokommune/hackathon-app-template/blob/master/src/views/Help.vue">
				prosjekt-mappe/src/views/Help.vue
			</a>
		</p>


		<h2>Komponenter</h2>
		<p>
			Vi har laget noen komponenter dere kan bruke for å komme kjapt i gang.
			For eksempel har dere tilgang til
			komponenten BaseButton som kan brukes slik:
			<br />
			<TextInput style="display: inline-block; margin-right: 1em;" v-model="exampleText" />
			<BaseButton primary style="margin: 1em 0 1em 0;">Submit</BaseButton>
			<br />
			Dere står fritt til å modifisere de eksisterende komponentene eller lage egne om dere trenger det.
			Ta en titt på <a href="https://tuuturu.github.io/vue/?path=/story/buttons-button--primary">oversikten over komponentene</a> for å se hva som er tilgjengelig.
		</p>


		<h2>Farger</h2>
		<p>
			Fargene er hentet ut fra
			<a href="https://styleguide.oslo.kommune.no/#/pattern/globals-colors-palette">Oslo Styleguide</a>
			og dere har tilgang til alle fargene via scss importen <code>@import '~@tuuturu/styling/style';</code>
			<br />
			For eksempel kan man bruke:
		</p>
		<br />
		<div id="exampleRed" class="exampleColor">$red</div>
		<div id="examplePurple" class="exampleColor">$purple-visited</div>
		<div id="exampleGreen" class="exampleColor">$green</div>
		<div id="exampleBeige" class="exampleColor">$beige</div>


		<h2>Typografi</h2>
		<p>
			Vi har lagt til stiler på lenker, H1, H2 og H3 samt paragrafer. Hvis dere ønsker å endre disse globale stilene eller legge til egne kan dette gjøres i
			<a href="https://github.com/oslokommune/hackathon-app-template/blob/master/src/App.vue">prosjekt-mappe/src/App.vue</a>
		</p>


		<h2>Vue + IDE</h2>
		<p>
			Pro tip for utvikling i Vue med et IDE: pek på
			<span class="bold">/node_modules/@vue/cli-service/webpack.config.js</span> for å fortelle IDE'et hvordan
			Vue gjør webpack config.
		</p>
	</div>
</template>

<script>
import { BaseButton } from '@tuuturu/vue/buttons' // Knappene finnes her
import { TextInput } from '@tuuturu/vue/forms' // Skjema-komponenter her

export default {
	name: 'help',
	components: {
		BaseButton, TextInput
	},
	data: () => ({
		exampleText: 'Mye rar text'
	})
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style'; // Farger blir hentet herfra

.Help {
	text-align: left;
}

.bold {
	font-weight: bold;
}

/*
 * Bruk av farger
 */
.exampleColor {
	padding: 1em;
	min-width: 9em;
	margin-right: 0.5em;
	display: inline-block;
}
#exampleRed {
	background-color: $red;
}
#examplePurple {
	background-color: $purple-visited;
	color: $grey-light;
}
#exampleGreen {
	background-color: $green;
}
#exampleBeige {
	background-color: $beige-dark;
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
