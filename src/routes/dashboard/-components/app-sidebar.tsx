'use client'

import { Map, PieChart } from 'lucide-react'
import * as React from 'react'

import Logo from '@/components/svg/logo'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { NavProjects } from '.././-components/nav-projects'
import { NavUser } from '.././-components/nav-user'

// This is sample data.
const data = {
	user: {
		name: 'Pokémon',
		email: 'pokemongame.com',
		avatar: '',
	},
	projects: [
		{
			name: 'Home',
			url: '/',
			icon: Map,
		},
		{
			name: 'Wallet',
			url: '/wallet',
			icon: PieChart,
		},
		{
			name: 'Booking',
			url: '/booking',
			icon: Map,
		},
		{
			name: 'Business',
			url: '/business',
			icon: PieChart,
		},
		{
			name: 'Explore',
			url: '/explore',
			icon: Map,
		},
		{
			name: 'Support',
			url: '/support',
			icon: Map,
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant='floating' collapsible='icon' {...props}>
			<SidebarHeader>
				{/* <TeamSwitcher teams={data.teams} /> */}

				<div className='flex items-center group-data-[collapsible=icon]:justify-center justify-between'>
					<Logo className='group-data-[collapsible=icon]:hidden' />
					<SidebarTrigger className='fill-transparent hover:bg-blue-500' />
				</div>
			</SidebarHeader>
			<SidebarContent>
				<NavProjects projects={data.projects} />
				{/* <NavMain items={data.navMain} /> */}
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
