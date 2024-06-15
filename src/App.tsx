import { useState } from "react";
import { Product } from "./components/Product";
import { Form } from "./components/Form";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Theme } from "./components/Theme";

type ProductType = {
	id: number;
	productName: string;
	quantity: number;
};

function App() {
	const [products, setProducts] = useLocalStorage<ProductType[]>(
		"products",
		[]
	);
	const [isErrorShown, setIsErrorShown] = useState(false);
	const [theme, setTheme] = useLocalStorage("Theme", "Light");

	function handleAddProduct(name: string, number: number) {
		const existingProduct = products.find(
			(product) => product.productName.toLowerCase() === name.toLowerCase()
		);
		const newProduct = {
			id: Math.random(),
			productName: name,
			quantity: number,
		};

		if (existingProduct) {
			setIsErrorShown(true);
			setTimeout(() => {
				setIsErrorShown(false);
			}, 3000);
		} else {
			setProducts([...products, newProduct]);
		}
	}

	function handleRemoveProduct(id: number) {
		const existingProduct = products.find((product) => product.id === id);

		if (existingProduct) {
			if (existingProduct.quantity === 1) {
				const newProducts = products.filter((product) => product.id !== id);
				setProducts(newProducts);

				if (newProducts.length === 0) {
					localStorage.removeItem("products");
				}
			} else {
				const updatedProducts = products.map((product) =>
					product.id === id
						? { ...product, quantity: product.quantity - 1 }
						: product
				);
				setProducts(updatedProducts);
			}
		}
	}

	return (
		<div
			className={`w-full h-[100vh] ${
				theme === "light" ? "bg-gray-300" : "bg-gray-900"
			}`}>
			<div className="flex justify-center pt-[200px]">
				<div
					className={`${
						theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"
					} p-[50px] w-[350px] md:w-[450px] rounded-lg relative`}>
					<div className="absolute top-3 right-3">
						<Theme theme={theme} setTheme={setTheme} />
					</div>

					<h1 className="font-bold text-2xl text-center mb-8">Shopping List</h1>
					<Form handleAddProduct={handleAddProduct} />
					{products.length > 0 && (
						<div className="grid grid-cols-mobile md:grid-cols-products">
							<h3 className="font-medium">Product</h3>
							<h3 className="font-medium">Quantity</h3>
							<h3 className="font-medium">Remove</h3>
						</div>
					)}
					{isErrorShown && (
						<p className="text-center my-5 text-red-500">
							Product already exists
						</p>
					)}
					<ul className="mt-3">
						{products.map((product) => (
							<Product
								key={product.id}
								productName={product.productName}
								quantity={product.quantity}
								id={product.id}
								handleRemoveProduct={handleRemoveProduct}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
