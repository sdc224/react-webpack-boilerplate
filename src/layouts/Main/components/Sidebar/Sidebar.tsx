import React from "react";
import clsx from "clsx";
import { Divider, Drawer } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
	Dashboard as DashboardIcon,
	Settings as SettingsIcon
} from "@material-ui/icons";

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
