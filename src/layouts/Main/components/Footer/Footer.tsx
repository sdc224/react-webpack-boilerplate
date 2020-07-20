import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Typography, Link, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4)
	}
}));

interface FooterProps {
	className?: string;
}

const Footer = ({ className, ...rest }: FooterProps) => {
	const classes = useStyles();

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<Typography variant="body1">
				&copy;{" "}
				<Link
					component="a"
					href="https://github.com/sdc224/"
					target="_blank"
				>
					SDCWorld
				</Link>
				. 2020
			</Typography>
			<Typography variant="caption">
				Created with ❤ for the environment.
			</Typography>
		</div>
	);
};

export default Footer;
