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
		<div 
			className={`${className} block rotate-45 rounded-3xl shadow-md bg-white shadow-blue hover:shadow-lima cursor-pointer`}>
			<div className={`${sizeClass} ${fontClass} border border-blue text-blue rounded-3xl flex items-center justify-center hover:bg-blue hover:text-white transition-all duration-150 ease-linear`}>
				<div className={'-rotate-45 font-bold'}>
					{textContent}
				</div>
			</div>
		</div>
	)
}

export default Rombo
