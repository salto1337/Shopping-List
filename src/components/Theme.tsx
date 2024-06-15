import black_moon from "../assets/black_moon.png";
import white_sun from "../assets/white_sun.png";

export function Theme({
	theme,
	setTheme,
}: {
	theme: string;
	setTheme: (newTheme: string) => void;
}) {
	return (
		<img
			className="cursor-pointer w-[35px]"
			src={theme === "light" ? black_moon : white_sun}
			alt="icon"
			onClick={() => {
				const newTheme = theme === "light" ? "dark" : "light";
				setTheme(newTheme);
			}}
		/>
	);
}
