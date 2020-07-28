import React, { useState } from "react";
import clsx from "clsx";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme, Theme } from "@material-ui/core/styles";

import { Sidebar, Topbar, Footer } from "./components";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingTop: 56,
		height: "100%",
		[theme.breakpoints.up("sm")]: {
			paddingTop: 64
		}
	},
	shiftContent: {
		paddingLeft: 240
	},
	content: {
		backgroundColor: theme.palette.background.default,
		height: "100%"
	}
}));

interface MainProps {
	children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
	const classes = useStyles();
	const theme = useTheme();
	const isDesktop = useMediaQuery<Theme>(
		(theme as Theme).breakpoints.up("lg"),
		{
			defaultMatches: true
		}
	);

	const [openSidebar, setOpenSidebar] = useState(false);

	const handleSidebarOpen = () => {
		setOpenSidebar(true);
	};

	const handleSidebarClose = () => {
		setOpenSidebar(false);
	};

	const shouldOpenSidebar = isDesktop ? true : openSidebar;

	return (
		<div
			className={clsx({
				[classes.root]: true,
				[classes.shiftContent]: isDesktop
			})}
		>
			<Topbar onSidebarOpen={handleSidebarOpen} />
			<Sidebar
				onClose={handleSidebarClose}
				open={shouldOpenSidebar}
				variant={isDesktop ? "persistent" : "temporary"}
			/>
			<main className={classes.content}>
				{children}
				<Footer />
			</main>
		</div>
	);
};

export default Main;
