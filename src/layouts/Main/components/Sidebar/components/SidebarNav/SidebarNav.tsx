/* eslint-disable react/display-name */
import React from "react";
import { NavLink as RouterLink, NavLinkProps } from "react-router-dom";
import clsx from "clsx";
import { List, ListItem, Button } from "@material-ui/core";
import * as colors from "@material-ui/core/colors";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	item: {
		display: "flex",
		paddingTop: 0,
		paddingBottom: 0
	},
	button: {
		color: colors.blueGrey[800],
		padding: "10px 8px",
		justifyContent: "flex-start",
		textTransform: "none",
		letterSpacing: 0,
		width: "100%",
		fontWeight: theme.typography.fontWeightMedium
	},
	icon: {
		// TODO : Below line after theme
		// color: theme.palette.icon,
		color: theme.palette.grey[100],
		width: 24,
		height: 24,
		display: "flex",
		alignItems: "center",
		marginRight: theme.spacing(1)
	},
	active: {
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightMedium,
		"& $icon": {
			color: theme.palette.primary.main
		}
	}
}));

const CustomRouterLink = React.forwardRef<HTMLDivElement, NavLinkProps>(
	(props, ref) => (
		<div ref={ref} style={{ flexGrow: 1 }}>
			<RouterLink {...props} />
		</div>
	)
);

interface SidebarNavProps {
	className?: string;
	pages: Array<Pages>;
}

const SidebarNav = ({ pages, className, ...rest }: SidebarNavProps) => {
	const classes = useStyles();

	return (
		<List {...rest} className={clsx(classes.root, className)}>
			{pages.map((page) => (
				<ListItem
					className={classes.item}
					disableGutters
					key={page.title}
				>
					<Button
						activeClassName={classes.active}
						className={classes.button}
						component={CustomRouterLink}
						to={page.href}
					>
						<div className={classes.icon}>{page.icon}</div>
						{page.title}
					</Button>
				</ListItem>
			))}
		</List>
	);
};

export default SidebarNav;
