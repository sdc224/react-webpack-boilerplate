import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	root: {
		boxShadow: "none"
	}
}));

interface TopbarProps {
	className?: string;
}

const Topbar = ({ className, ...rest }: TopbarProps) => {
	const classes = useStyles();

	return (
		<AppBar
			{...rest}
			className={clsx(classes.root, className)}
			color="primary"
			position="fixed"
		>
			<Toolbar>
				<RouterLink to="/">
					<img alt="Logo" src="/images/logos/logo--white.svg" />
				</RouterLink>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
