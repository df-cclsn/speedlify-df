module.exports = {
	name: "next-level-storytelling", // optional, falls back to object key
	description: "next-level-storytelling.diefirma.de",
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
		"https://next-level-storytelling.diefirma.de",
    		"https://next-level-storytelling.diefirma.de/kurse/",
	]
};
