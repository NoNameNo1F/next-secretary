"use client";
import { useEffect, useState } from "react";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const [profilePopup, setProfilePopup] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	const toggleProfile = () => {
		setProfilePopup((prev) => !prev);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navItems = [
		{ href: "/", text: "Home" },
		{ href: "/teams", text: "Tasks" },
		{ href: "/finance", text: "Finance" },
	];

	return (
		<div className="h-screen bg-[url(https://i0.hippopx.com/photos/504/384/836/mt-fuji-twilight-sea-enoshima-preview.jpg)] bg-cover bg-center">
			{/* FIX 1: Added 'group' and a custom '.is-scrolled' class based on state */}
			<nav
				id="navbar"
				className={`group sticky top-0 z-50 transition-colors duration-300 ${
					isScrolled
						? "is-scrolled bg-stone-50 bg-opacity-90 shadow-lg backdrop-blur-sm"
						: "bg-transparent"
				}`}
			>
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								onClick={toggleMenu}
								aria-controls="mobile-menu"
								aria-expanded={menuOpen}
								className={`relative inline-flex items-center justify-center rounded-md p-2 transition-colors ${
									// This logic for the hamburger icon itself is correct
									isScrolled
										? "text-gray-800 hover:bg-gray-200"
										: "text-gray-300 hover:bg-gray-700 hover:text-white"
								}`}
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
								<svg
									className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div
								className={`w-full sm:ml-6 ${
									menuOpen ? "block" : "hidden"
								} sm:block`}
							>
								<div className="absolute left-0 top-16 flex w-full flex-col items-start space-y-2 p-4 sm:relative sm:top-auto sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 sm:bg-transparent sm:p-0">
									{navItems.map((item) => (
										<a
											key={item.text}
											href={item.href}
											// FIX 2: Text color is now light by default (for mobile)
											// and only changes to dark on desktop when the group is scrolled
											className="group/link relative inline-block rounded-md py-2 font-bold transition-colors text-stone-200 hover:text-white sm:px-3 sm:group-[.is-scrolled]:text-indigo-600 sm:group-[.is-scrolled]:hover:text-indigo-900"
										>
											{item.text}
											<span
												// FIX 3: The underline color also uses the group state for desktop
												className="absolute bottom-1 left-0 block h-0.5 w-0 bg-stone-50 transition-all duration-300 group-hover/link:w-full sm:group-[.is-scrolled]:bg-indigo-900"
											></span>
										</a>
									))}
								</div>
							</div>
						</div>

						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<button
								type="button"
								className="relative rounded-full bg-gray-800 p-1 text-gray-400 transition-colors hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							>
								<span className="sr-only">View notifications</span>
								<svg
									className="size-6"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
									/>
								</svg>
							</button>

							<div className="relative ml-3">
								<button
									type="button"
									onClick={toggleProfile}
									className="relative flex rounded-full bg-gray-800 text-sm transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="sr-only">Open user menu</span>
									<img
										className="size-8 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</button>
								{profilePopup && (
									<div
										role="menu"
										className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
									>
										<a
											href="#"
											role="menuitem"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>
											Your Profile
										</a>
										<a
											href="#"
											role="menuitem"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>
											Settings
										</a>
										<a
											href="#"
											role="menuitem"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										>
											Sign out
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Text Content */}
			<div className="flex h-full items-center justify-center text-center -mt-16 px-4">
				<div className="text-white">
					<h1 className="text-4xl font-extrabold tracking-tight text-stone-50 md:text-5xl">
						<span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-indigo-600">
							<span className="relative text-white">Tasks</span>
						</span>
						 Management
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg text-stone-200 md:text-xl">
						A powerful tool to bring your teams, tasks, and projects together.
						<br />
						Achieve more with less effort.
					</p>
				</div>
			</div>
		</div>
	);
}
