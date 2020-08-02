import React from "react";

interface MockComponentProps {
	children?: React.ReactNode;
}

const MockComponent = ({ children }: MockComponentProps) => {
	return (
		<>
			{children}
			<p>Mock Component</p>
		</>
	);
};

export default MockComponent;
