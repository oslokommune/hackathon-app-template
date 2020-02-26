<template>
	<div class="Awards">
		<div id="nav">
			<router-link to="/Help">Hjelp</router-link> |
			<router-link to="/Inspiration">Inspirasjon</router-link> |
			<router-link to="/Awards">Premier</router-link> |
			<router-link to="/Resources">Ressurser</router-link>
		</div>
		<h1>Ressurser️</h1>
		<a href="https://docs.google.com/presentation/d/1hULJEx092QZYeUhy5K15L67b0vYTlYnDDw7qQIrjuBg/edit#slide=id.g6ea9cd5290_2_122">Presentasjonen</a>
		<h2>Beskrivelse av produktområdene</h2>
		<ul>
			<li><a href="https://docs.google.com/presentation/d/1hqH6mUmLMdX9TtFVXjfqvUze5kuYzq-ZyN9v1Va5xm0/edit#slide=id.g7e2e960ec4_2_18" target="_blank">Dataplattform</a></li>
			<li><a href="https://docs.google.com/presentation/d/1G9a7gGHC7JrWv4levx8we8iVeEfbKyr9z7X6CequxTs/edit#slide=id.g7df26df15c_0_87" target="_blank">Informasjonsforvaltning</a></li>
			<li><a href="#" target="_blank">Infrastruktur</a></li>
			<li><a href="https://confluence.oslo.kommune.no/pages/viewpage.action?spaceKey=UKENC&title=2020-02-11+Presentasjon+ITAS+-+Marvin+-+Sky+OPaaS" target="_blank">Plattform</a></li>
			<li><a href="https://sites.google.com/byr.oslo.kommune.no/okr-og-oppdrag/utviklerportalen" target="_blank">Utviklerportalen</a></li>
		</ul>
		<h2>Maler og verktøy</h2>
		<ul>
			<li><a href="https://medium.com/kjernemodellen/slik-bruker-du-kjernemodellen-40de60a46850" target="_blank">Kjernemodellen</a> - et verktøy for å forenkle, prioritere og få ting til å skje.</li>
		</ul>
		<h2>Skrivetips</h2>
			<h3>Hvordan skrive klartekst</h3>
			<ul>
				<li>Plasser viktig informasjon først</li>
				<li>Skriv korte setninger: En idé per setning</li>
				<li>Varier rytmen i setninger: Forskjellig lengde</li>
				<li>Bryt opp teksten i paragrafer: Hver paragraf handler om hver sin ting</li>
				<li>Unngå sjargong. Hvis du må likevel, forklar hva det betyr første gang du bruker begrepet.</li>
				<li>Unngå tvetydige svar, som for eksempel "mange ganger", "fort" og "mye"</li>
				<li>Bruk vanlige ord - unngå lange ord og ukjente forkortelser</li>
				<li>Bruk aktiv stemme</li>
			</ul>
			<h3>Aktiv stemme</h3>
			<p>Passiv stemme gir en tekst en høytidelig og formell stil og skaper avstand mellom tekst og leser. En aktiv stemme gir en mindre formell stil og avstand mellom tekst og leser blir mindre. Derfor vil vi bruke aktiv stemme i dokumentasjonen vår. Aktiv stemme bruker konkrete, aktive verb, korte setninger og direkte tiltale (du-form). Denne teksten bruker aktiv stemme, hvor du som leser dette tiltales direkte.</p>
			<h3>Eksempel på passiv stemme:</h3>
			<span>Maskinen kan skrus på ved å trykke på knappen</span>
			<h3>Eksempel på aktiv stemme:</h3>
			<span>Trykk på knappen for å skru av maskinen</span>
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
