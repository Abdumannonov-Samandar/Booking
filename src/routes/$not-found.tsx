import { createFileRoute, Link } from '@tanstack/react-router'
import { AlertTriangle } from 'lucide-react'

function NotFound() {
	return (
		<div className='flex min-h-[calc(100dvh-200px)] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
			<div className='mx-auto max-w-md text-center'>
				<AlertTriangle className='mx-auto h-12 w-12 text-primary' />
				<h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
					Voy, sahifa topilmadi!
				</h1>
				<p className='mt-4 text-muted-foreground'>
					Siz qidirayotgan sahifa mavjud emas yoki koʻchirilgan. Keling, sizni
					yo‘lga qaytaraylik.
				</p>
				<div className='mt-6'>
					<Link
						to='/'
						className='inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
					>
						Go to home
					</Link>
				</div>
			</div>
		</div>
	)
}

export const Route = createFileRoute('/$not-found')({
	component: NotFound,
})
