import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { Avatar, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		minHeight: "fit-content"
	},
	avatar: {
		width: 60,
		height: 60
	},
	name: {
		// Bug for IE 11
		// See: https://stackoverflow.com/questions/35111090/text-in-a-flex-container-doesnt-wrap-in-ie11
		maxWidth: "100%",
		marginTop: theme.spacing(1)
	}
}));

interface ProfileProps {
	className?: string;
}

const Profile = ({ className, ...rest }: ProfileProps) => {
	const classes = useStyles();

	// TODO : Convert to Image Avatar
	const user = {
		name: "Sourodeep Chatterjee",
		avatar: "/images/avatars/sdc.png",
		bio: "Developer"
	};

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<Avatar
				alt="Person"
				className={classes.avatar}
				component={RouterLink}
				// src={user.avatar}
				to="/settings"
			>
				S
			</Avatar>
			<Typography className={classes.name} variant="h4">
				{user.name}
			</Typography>
			<Typography variant="body2">{user.bio}</Typography>
		</div>
	);
};

export default Profile;
