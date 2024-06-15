interface productProps {
	productName: string;
	quantity: number;
	id: number;
	handleRemoveProduct: (id: number) => void;
}

export function Product({
	productName,
	quantity,
	id,
	handleRemoveProduct,
}: productProps) {
	return (
		<li className="border-t-2 py-3 grid-cols-mobile grid md:grid-cols-products">
			{productName}
			<p>{quantity}</p>
			<button
				onClick={() => handleRemoveProduct(id)}>
				x
			</button>
		</li>
	);
}
