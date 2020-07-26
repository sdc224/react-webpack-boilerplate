import React from "react";

function useLocalStorage(key: string, initialValue: any) {
	const [storedValue, setStoredValue] = React.useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (e) {
			console.log(e);
			return initialValue;
		}
	});
	const setValue = (value: any) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (e) {
			console.log(e);
		}
	};
	return [storedValue, setValue];
}

export default useLocalStorage;
