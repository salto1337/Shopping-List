import { useState } from "react";

type HandleAddProduct = (name: string, number: number) => void;

export function Form({
	handleAddProduct,
}: {
	handleAddProduct: HandleAddProduct;
}) {
	const [inputValue, setInputValue] = useState("");
	const [inputNumber, setInputNumber] = useState(0);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		handleAddProduct(inputValue, inputNumber);
		setInputValue("");
		setInputNumber(1);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex justify-center gap-3">
				<input
					className="pl-3 border-2 w-full text-black"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					type="text"
					placeholder="Product name..."
					required
				/>
				<input
					value={inputNumber === 0 ? "Quantity" : inputNumber}
					className="pl-3 border-2 w-full text-black"
					onChange={(e) => setInputNumber(Number(e.target.value))}
					type="number"
					placeholder="Quantity"
					min={1}
					max={15}
					required
				/>
			</div>
			<div className="flex justify-center my-5">
				<button className="border-2 w-[150px]">Add</button>
			</div>
		</form>
	);
}
