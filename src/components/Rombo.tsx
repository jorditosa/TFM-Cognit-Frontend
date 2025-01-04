import { ReactNode } from "react";

interface Props {
	className?: string;
	textContent: ReactNode;
	font: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Rombo = ({ className, textContent, font, size }: Props) => {
  
	// Asignación del tamaño en base al prop 'size'
	const sizeClass = {
		xs: 'w-20 h-20',
		sm: 'w-28 h-28',
		md: 'w-40 h-40',
		lg: 'w-60 h-60',
		xl: 'w-96 h-96',
	}[size] || 'w-40 h-40'

	// Asignación de la clase de fuente en base al prop 'font'
	const fontClass = {
		xs: 'text-sm',
		sm: 'text-lg',
		md: 'text-xl',
		lg: 'text-2xl',
		xl: 'text-5xl',
	}[font] || 'text-xl'

	return (
			<div className={`${sizeClass} ${fontClass} ${className} border-4 rotate-45 bg-mint/25 border-lima text-white rounded-3xl flex items-center justify-center hover:bg-dark hover:text-white transition-all duration-150 ease-linear mx-auto`}>
				<div className={'-rotate-45 text-center'}>
					{textContent}
				</div>
			</div>
	)
}

export default Rombo
