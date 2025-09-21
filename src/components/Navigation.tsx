import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
	{ id: 'home', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'technology', label: 'Technology' },
	{ id: 'product', label: 'Product' },
	// { id: 'compliance', label: 'Compliance' },
	// { id: 'resources', label: 'Resources' },
	// { id: 'careers', label: 'Careers' },
	{ id: 'contact', label: 'Contact' },
];

const Navigation = () => {
	const [activeSection, setActiveSection] = useState('home');
	const [isScrolled, setIsScrolled] = useState(false);
	const navRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);

			// Update active section based on scroll position
			const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
			const currentSection = sections.find((section) => {
				if (!section) return false;
				const rect = section.getBoundingClientRect();
				return rect.top <= 100 && rect.bottom >= 100;
			});

			if (currentSection) {
				setActiveSection(currentSection.id);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Initialize --nav-h on mount and handle initial hash anchors
	useEffect(() => {
		const navEl = navRef.current;
		if (!navEl) return;
		const height = navEl.offsetHeight;
		document.documentElement.style.setProperty('--nav-h', `${height}px`);

		if (window.location.hash) {
			const id = window.location.hash.slice(1);
			const el = document.getElementById(id);
			if (el) {
				// allow layout to settle
				setTimeout(() => el.scrollIntoView({ block: 'start' }), 0);
			}
		}
	}, []);

	// Keep a CSS variable --nav-h in sync with the nav height so anchor scrolling
	// (and SectionContainer's scrollMarginTop) always offset correctly.
	useEffect(() => {
		const setNavHeightVar = () => {
			const navEl = navRef.current;
			if (!navEl) return;
			const height = navEl.offsetHeight;
			document.documentElement.style.setProperty('--nav-h', `${height}px`);
		};

		// Update initially and whenever the window resizes or nav size changes
		setNavHeightVar();

		// Use ResizeObserver when available to react to content/size changes of the nav
		let ro: ResizeObserver | null = null;
		if (typeof ResizeObserver !== 'undefined' && navRef.current) {
			ro = new ResizeObserver(() => setNavHeightVar());
			ro.observe(navRef.current);
		}

		window.addEventListener('resize', setNavHeightVar);
		return () => {
			window.removeEventListener('resize', setNavHeightVar);
			if (ro && navRef.current) ro.unobserve(navRef.current);
		};
	}, [isScrolled]);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<nav
			ref={navRef}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'py-2' : 'py-6'
			}`}
		>
			<div className="container mx-auto px-6">
				<div className="glass-panel flex items-center justify-between px-4">
					<div className="flex items-center">
						<img
							src="/images/visara_logo.png"
							alt="Visara logo"
							className="w-24 h-24"
							loading="lazy"
						/>
						<span className="font-hubot font-bold text-2xl text-foreground">
							Visara
						</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1">
						{NAV_ITEMS.map((item) => (
							<Button
								key={item.id}
								variant="ghost"
								size="sm"
								onClick={() => scrollToSection(item.id)}
								className={`font-work text-md transition-all ${
									activeSection === item.id
										? 'bg-primary/20 text-primary font-medium'
										: 'text-foreground/80 hover:text-foreground hover:bg-white/20'
								}`}
							>
								{item.label}
							</Button>
						))}
					</div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="sm"
						className="md:hidden"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
