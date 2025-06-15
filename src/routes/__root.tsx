import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { AppSidebar } from './dashboard/-components/app-sidebar'
import clsx from 'clsx'
import Header from '@/components/header'

export const Route = createRootRoute({
	component: () => {
		// Foydalanuvchi ayni damdagi URL pathini olamiz
		const pathname = useRouterState({
			select: state => state.location.pathname,
		})

		// 404 sahifa tekshiruvi
		const isNotFoundPage = useRouterState({
			select: state =>
				state.matches[state.matches.length - 1]?.routeId === '/$not-found',
		})

		// Asosiy (katta) background uchun yo'llar
		const homeRoutes = ['/', '/hotel']

		// Kichik (summary, results) background uchun yo'llar
		const detailRoutes = [
			'/results',
			'/summary',
			'/hotel/map-view',
			'/hotel/results',
			'/hotel/booking-review',
			'/taxi',
		]

		// Qaysi turdagi background kerakligini aniqlaymiz
		const isHomeRoute =
			homeRoutes.includes(pathname) ||
			homeRoutes.some(
				route =>
					pathname === route ||
					(route !== '/' && pathname.startsWith(route + '/'))
			)
		const isDetailRoute = detailRoutes.some(route => pathname.startsWith(route))

		// Background ko'rsatish kerakmi?
		const shouldShowBackground =
			!isNotFoundPage && (isHomeRoute || isDetailRoute)

		return (
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset className='relative'>
					<Header className={isNotFoundPage ? 'hidden' : undefined} />

					{/* Background rasmi */}
					{shouldShowBackground && (
						<div
							className={clsx(
								'fixed top-0 left-0 right-0 bg-no-repeat bg-cover bg-center z-0',
								{
									'h-[431px] bg-[url("/big.svg")]': isHomeRoute,
									'h-[117px] bg-[url("/bg-top.svg")]':
										isDetailRoute && !isHomeRoute,
								}
							)}
						/>
					)}

					{/* Asosiy kontent */}
					<div
						className='relative flex flex-1 flex-col gap-4 p-4 pt-0 z-20'
					>
						<Outlet />
					</div>
				</SidebarInset>
			</SidebarProvider>
		)
	},
})
