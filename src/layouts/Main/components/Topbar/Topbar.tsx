import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import {
	AppBar,
	Toolbar,
	Badge,
	Hidden,
	IconButton,
	Tooltip
} from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import {
	Menu as MenuIcon,
	NotificationsOutlined as NotificationsIcon,
	Input as InputIcon,
	GitHub as GitHubIcon
} from "@material-ui/icons";
import CustomSwitch from "@components/CustomSwitch";
import useThemeSelector from "@selectors/themeSelectors";

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
	const { darkMode, changeTheme } = useThemeSelector();

	return (
		<AppBar {...rest} className={clsx(classes.root, className)}>
			<Toolbar>
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onSidebarOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
				<RouterLink to="/">
					{/* <img alt="Logo" src="/logo.svg" /> */}
					<GitHubIcon />
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
					<Tooltip title="Dark Mode">
						<CustomSwitch
							checked={darkMode}
							onChange={() => changeTheme(!darkMode)}
						/>
					</Tooltip>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
