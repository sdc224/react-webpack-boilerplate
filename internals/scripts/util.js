/**
 * Get OS Name
 * @return {NodeJS.Platform} The OS Platform name
 *
 * @author Sourodeep Chatterjee <sourodeep224@outlook.com>
 */
function getOs() {
	return process.platform;
}

module.exports = {
	getOs
};
