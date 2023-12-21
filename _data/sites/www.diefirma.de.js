module.exports = {
	name: "diefirma.de", // optional, falls back to object key
	description: "www.diefirma.de",
    skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.diefirma.de",
        	"https://www.diefirma.de/de/projekte",
        	"https://www.diefirma.de/de/leistungen",
        	"https://www.diefirma.de/de/blog",
        	"https://www.diefirma.de/de/blog/employee-brands",
        	"https://www.diefirma.de/de/projekte/1822direkt-design-systeme",
	]
};
