import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Link, useRouterState } from '@tanstack/react-router'
import { LucideIcon } from 'lucide-react'

export function NavProjects({
	projects,
}: {
	projects: { name: string; url: string; icon: LucideIcon }[]
}) {
	const pathname = useRouterState({
		select: state => state.location.pathname,
	})

	return (
		<SidebarGroup>
			<SidebarMenu>
				{projects.map(item => {
					const isActive = pathname === item.url

					return (
						<SidebarMenuItem key={item.name}>
							<SidebarMenuButton
								className={`rounded-3xl h-[38px] pl-[19px] mx-auto text-white transition-colors 
									hover:bg-blue-500 hover:text-white
									active:bg-blue-500 active:text-white
									${isActive ? 'bg-blue-500 text-white' : ''}`}
								asChild
							>
								<Link to={item.url}>
									<item.icon size={18} />
									<span className='text-base font-semibold transition-all duration-300 overflow-hidden whitespace-nowrap group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:max-w-0 group-data-[collapsible=icon]:invisible group-data-[collapsible=default]:opacity-100 group-data-[collapsible=default]:max-w-[200px] group-data-[collapsible=default]:visible'>
										{item.name}
									</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					)
				})}
			</SidebarMenu>
		</SidebarGroup>
	)
}
