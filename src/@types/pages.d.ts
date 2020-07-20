/**
 * Operation interface
 * Useful for creating different views
 * @author Sourodeep Chatterjee <sourodeep224@outlook.com>
 */
interface Pages {
	/**
	 * Title of the new View
	 */
	title: string;
	/**
	 * Link of the new view
	 */
	href: string;
	/**
	 * Icon to render in the Sidebar for the specific view
	 */
	icon: React.ReactElement;
}
