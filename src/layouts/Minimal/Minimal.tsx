import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Topbar from "./components";

const useStyles = makeStyles(() => ({
	root: {
		paddingTop: 64,
		height: "100%"
	},
	content: {
		height: "100%"
	}
}));

interface MinimalProps {
	children?: React.ReactNode;
}

const Minimal = ({ children }: MinimalProps) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Topbar />
			<main className={classes.content}>{children}</main>
		</div>
	);
};

export default Minimal;
