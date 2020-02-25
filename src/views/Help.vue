<template>
	<div class="Help">
		<h1>Hjelp</h1>
		<p>
			Eksempler på bruk av følgene komponenter, farger og verktøy finnes i kildekoden til denne filen. Denne
			ligger i
			<a href="https://github.com/oslokommune/hackathon-app-template/blob/master/src/views/Help.vue">
				prosjekt-mappe/src/views/Help.vue
			</a>
		</p>


		<h2>Komponenter</h2>
		<p>
			Vi har laget noen komponenter dere kan bruke for å komme kjapt i gang.
			For eksempel, har dere tilgang til på tekstfeltet <span class="bold">TextInput</span> og knappen
			<span class="bold">BaseButton</span> som kan brukes slik:
			<br />
			<TextInput v-model="exampleText" />
			<BaseButton primary>Submit</BaseButton>
			<br />
			Alle komponentene tilgjengelig finner dere
			<a href="https://tuuturu.github.io/vue/?path=/story/buttons-button--primary">her</a>.
		</p>


		<h2>Farger</h2>
		<p>
			Fargene er hentet ut fra
			<a href="https://styleguide.oslo.kommune.no">Oslo Styleguide</a>
			og dere har tilgang til alle fargene nevnt
			<a href="https://styleguide.oslo.kommune.no/#/pattern/globals-colors-palette">her</a> via scss importen
			<span class="bold">@import '~@tuuturu/styling/style';</span>
			<br />
			For eksempel kan man bruke
		</p>
		<br />
		<span id="exampleRed" class="exampleText">$red</span>
		<span id="examplePurple" class="exampleText">$purple-visited</span>
		<span id="exampleGreen" class="exampleText">$green</span>
		<span id="exampleBeige" class="exampleText">$beige</span>


		<h2>Typografi</h2>
		<p>
			Vi har tatt oss friheten til å style ting løst etter Oslo Styleguide. Hvis dere ønsker å endre eller slette
			stilene, kan dette gjøres i
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
	padding: 1em;
}

.bold {
	font-weight: bold;
}

/*
 * Bruk av farger
 */
.exampleText {
	padding: 0.5em;
	margin-right: 0.5em;
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
</style>
