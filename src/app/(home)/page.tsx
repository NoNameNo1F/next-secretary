import Image from "next/image";

export default function HomePage() {
	return (
		<div className="flex h-full bg-stone-900 justify-center items-center text-center -mt-16 px-4">
			<div className="text-white">
				<h1 className="text-4xl font-extrabold tracking-tight text-stone-50 md:text-5xl"></h1>
				Task Management
				<p className="mx-auto mt-6 max-w-3xl text-lg text-stone-200 md:text-xl">
					A powerful tool to bring your teams, tasks, and projects together.
					<br />
					Achieve more with less effort.
				</p>{" "}
			</div>
		</div>
	);
}
