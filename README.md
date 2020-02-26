# App-navn

## Ressurser
- [Komponentbibliotek](https://tuuturu.github.io/vue/)
- [Farger](https://styleguide.oslo.kommune.no/#/pattern/globals-colors-palette)

Komponenter og fargene er basert på [Oslo Style Guide](https://styleguide.oslo.kommune.no/).  

## Prosjektoppsett
### Få tak i en fil som heter .npmrc og plasser den i prosjektets rot-mappe (spør Julius)
```
cp ~/Downloads/.npmrc .
```
### Installer prosjektets avhengigheter
```
npm install
```

### Start en webserver som oppdaterer seg kontinuerlig
```
npm run serve
```
Vi har laget en veiledning, denne finnes på [localhost/#/help](http://localhost:8080/#/help) etter man har kjørt 'npm run serve'

### Deploy til [produksjon](https://oslokommune.github.io/hackathon-app-template/)
```
git push origin master
```
P.S.: Det kan ta et par minutter fra bygg er ferdig før forandringen er synlig i produksjon
