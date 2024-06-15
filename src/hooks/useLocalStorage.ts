import { useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
	function getJSONFromLocalStorage(): T {
		const storedValue = localStorage.getItem(key);
		if (storedValue) {
			return JSON.parse(storedValue) as T;
		} else {
			return defaultValue;
		}
	}

	const [data, setData] = useState<T>(() => getJSONFromLocalStorage());

	function setJSONTOLocalStorage(newData: T) {
		setData(newData);
		localStorage.setItem(key, JSON.stringify(newData));
	}

	return [data, setJSONTOLocalStorage] as const;
}
