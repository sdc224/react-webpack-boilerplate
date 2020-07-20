import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { AppBar, Toolbar, Badge, Hidden, IconButton } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import {
	Menu as MenuIcon,
	NotificationsOutlined as NotificationsIcon,
	Input as InputIcon
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		boxShadow: "none"
	},
	flexGrow: {
		flexGrow: 1
	},
	signOutButton: {
		marginLeft: theme.spacing(1)
	}
}));

interface TopbarProps {
	className?: string;
	onSidebarOpen: () => void;
}

const Topbar = ({ className, onSidebarOpen, ...rest }: TopbarProps) => {
	const classes = useStyles();

	const [notifications] = useState([]);

	return (
		<AppBar {...rest} className={clsx(classes.root, className)}>
			<Toolbar>
				<RouterLink to="/">
					<img alt="Logo" src="/images/logos/logo--white.svg" />
				</RouterLink>
				<div className={classes.flexGrow} />
				<Hidden mdDown>
					<IconButton color="inherit">
						<Badge
							badgeContent={notifications.length}
							color="primary"
							variant="dot"
						>
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton
						className={classes.signOutButton}
						color="inherit"
					>
						<InputIcon />
					</IconButton>
				</Hidden>
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onSidebarOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
