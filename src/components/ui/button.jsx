import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-xl text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-[#005C3C] text-white hover:bg-[#004a2e]', // Emerald Green
				destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
          'border border-[#CBAF7A] bg-transparent text-[#CBAF7A] hover:bg-[#CBAF7A]/10 hover:text-[#CBAF7A]', // Gold outline
				secondary:
          'bg-[#CBAF7A] text-[#3E2C22] hover:bg-[#bda16e]', // Gold solid
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-12 px-6 py-3',
				sm: 'h-10 rounded-lg px-4',
				lg: 'h-14 rounded-xl px-10 text-lg',
				icon: 'h-12 w-12',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = 'Button';

export { Button, buttonVariants };