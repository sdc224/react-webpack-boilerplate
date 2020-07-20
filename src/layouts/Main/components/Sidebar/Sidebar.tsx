import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer, Theme } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";

import { Profile, SidebarNav } from "./components";

const useStyles = makeStyles((theme: Theme) => ({
	drawer: {
		width: 240,
		[theme.breakpoints.up("lg")]: {
			marginTop: 64,
			height: "calc(100% - 64px)"
		}
	},
	root: {
		// TODO : Below line after theme
		// backgroundColor: theme.palette.white,
		backgroundColor: theme.palette.grey[100],
		display: "flex",
		flexDirection: "column",
		height: "100%",
		padding: theme.spacing(2)
	},
	divider: {
		margin: theme.spacing(2, 0)
	},
	nav: {
		marginBottom: theme.spacing(2)
	}
}));

interface SidebarProps {
	className?: string;
	open: boolean;
	variant?: "permanent" | "persistent" | "temporary";
	onClose: () => void;
}

const Sidebar = ({
	open,
	variant,
	onClose,
	className,
	...rest
}: SidebarProps) => {
	const classes = useStyles();

	const pages = [
		{
			title: "Dashboard",
			href: "/dashboard",
			icon: <DashboardIcon />
		},
		{
			title: "Settings",
			href: "/settings",
			icon: <SettingsIcon />
		}
	];

	return (
		<Drawer
			anchor="left"
			classes={{ paper: classes.drawer }}
			onClose={onClose}
			open={open}
			variant={variant}
		>
			<div {...rest} className={clsx(classes.root, className)}>
				<Profile />
				<Divider className={classes.divider} />
				<SidebarNav className={classes.nav} pages={pages} />
			</div>
		</Drawer>
	);
};

export default Sidebar;
