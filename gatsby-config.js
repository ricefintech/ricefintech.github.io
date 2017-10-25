module.exports = {
	siteMetadata: {
		siteURL: `http://ricefintech.org`,
		title: `Rice Fintech Scholars`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`
			}
		}
	]
};
