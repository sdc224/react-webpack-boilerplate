import React from "react";
import { Switch, SwitchProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import switchStyles from "./CustomSwitchStyles";

const useStyles = makeStyles(switchStyles);

export default function CustomSwitch(props: SwitchProps) {
	const classes = useStyles();
	return <Switch {...props} classes={classes} />;
}
