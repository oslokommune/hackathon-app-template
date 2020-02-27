<template>
	<div class="Inspiration">
		<div id="nav">
			<router-link to="/Help">Hjelp</router-link> |
			<router-link to="/Inspiration">Inspirasjon</router-link> |
			<router-link to="/Awards">Premier</router-link> |
			<router-link to="/Resources">Ressurser</router-link>
		</div>
		<h1>Inspirasjon</h1>
		<p>Tenk utenfor boksen!<br />Det er mange måter man kan presentere et produkt! Dere kan fokusere på forklarende tekster og bilder eller lage en video, lage et minispill, lage en superenkel chatbot eller fokusere på en liten bit av funksjonaliteten produktet deres tilbyr✨</p>
		<h2>Rett på sak! <br />Demo/miniversjon/getting started guide av produktet</h2>
		<ul>
			<li><a href="https://www.jetbrains.com/lp/mono/">https://www.jetbrains.com/lp/mono/</a></li>
			<li><a href="https://safe.page/buildsecurely/">https://safe.page/buildsecurely/</a></li>
			<li><a href="https://www.duolingo.com/">https://www.duolingo.com/</a></li>
			<li><a href="https://trello.com/guide">https://trello.com/guide</a></li>
		</ul>
		<h2>Minispill</h2>
		<ul>
			<li><a href="https://im-a-good-boye.itch.io/down-scroll">https://im-a-good-boye.itch.io/down-scroll</a></li>
			<li><a href="https://ohmaigawd.itch.io/afterlife-the-game">https://ohmaigawd.itch.io/afterlife-the-game</a></li>
			<li><a href="https://leodantas.itch.io/the-cake-is-a-what">https://leodantas.itch.io/the-cake-is-a-what</a></li>
			<li><a href="https://ncase.me/trust/">https://ncase.me/trust/</a></li>
		</ul>
		<h2>God storytelling</h2>
		<ul>
			<li><a href="https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html">https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html</a></li>
			<li><a href="https://www.defeatboco.com/worlds.html">https://www.defeatboco.com/worlds.html</a></li>
			<li><a href="https://thebearandhisscarf.com/">https://thebearandhisscarf.com/</a></li>
		</ul>
		<h2>Kommunikasjonskanal</h2>
		<ul>
			<li><a href="http://insomnobot3000.com/">http://insomnobot3000.com/</a></li>
			<li><a href="https://growthbot.org/chat">https://growthbot.org/chat</a></li>
		</ul>
		<h2>Videoer</h2>
		<ul>
			<li><a href="http://insomnobot3000.com/">http://insomnobot3000.com/</a></li>
			<li><a href="https://growthbot.org/chat">https://growthbot.org/chat</a></li>
		</ul>
		<h2>Klassiske produktpresentasjonssider</h2>
		<ul>
			<li><a href="https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl">https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl</a></li>
			<li><a href="https://mailchimp.com/">https://mailchimp.com/</a></li>
		</ul>

	</div>
</template>

<script>

export default {
	name: 'inspiration',
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style'; // Farger blir hentet herfra

.Inspiration {
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
