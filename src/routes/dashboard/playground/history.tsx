import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/playground/history' as '/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
			<div className='grid auto-rows-min gap-4 md:grid-cols-3'>
				<div className='bg-muted/50 aspect-video rounded-xl' />
				<div className='bg-muted/50 aspect-video rounded-xl' />
				<div className='bg-muted/50 aspect-video rounded-xl' />
			</div>
		</div>
	)
}
