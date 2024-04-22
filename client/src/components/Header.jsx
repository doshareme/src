import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav class="flex flex-wrap m-2 p-4 justify-center">
			<div className="h-18  p-0.5 w-96 rounded-full flex bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-700">
						<div className="h-18 hover:cursor-none hover:text-gray-300 hover:font-thin  w-1/3 p-2 flex flex-wrap align-middle justify-center shadow-lg rounded-full bg-clip-padding bg-opacity-40 bg-black  border border-gray-600">
							Home
			</div>
			<div className="h-18 hover:cursor-pointer w-1/3 p-2 flex flex-wrap align-middle justify-center rounded-full bg-clip-padding bg-opacity-40">
							About
			</div>
			<div className="h-18 hover:cursor-pointer w-1/3 p-2 flex flex-wrap align-middle justify-center rounded-full bg-clip-padding bg-opacity-40">
							Changelog
			</div>
			</div>
			
			</nav>

			

		</header>
	);
}
async function onload() {
	
}