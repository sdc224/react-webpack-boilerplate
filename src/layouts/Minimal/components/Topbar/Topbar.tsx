import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
