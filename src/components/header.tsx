import { buttonVariants } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Bell,
	User,
	Settings,
	LogOut,
	HelpCircle,
	Shield,
	Users,
	Briefcase,
	Award,
	CreditCard,
} from 'lucide-react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Link, useRouterState } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

const menuLinks = [
	{
		id: 1,
		label: 'Plane',
		src: 'Plane.svg',
		url: '/',
	},
	{
		id: 1,
		label: 'Hotel',
		src: 'Hotel.svg',
		url: '/hotel',
	},
	{
		id: 1,
		label: 'Villa',
		src: 'Villa.svg',
		url: '/villa',
	},
	{
		id: 1,
		label: 'Texia',
		src: 'Texi.svg',
		url: '/taxi',
	},
]

export default function Header({ className }: { className?: string }) {
	
	const pathname = useRouterState({
			select: state => state.location.pathname,
		})
		
	return (
		<header className={`w-full py-5 h-[117px] z-30 ${className}`}>
			{/* Header Content */}
			<div className='flex items-center justify-between px-4 md:px-6 h-full'>
				{/* Left Navigation Icons */}
				<div className='flex items-center space-x-7'>
					{menuLinks.map(link => {
					const isActive = pathname === link.url
					return (
						<Link
							to={link.url}
							className={cn(
								buttonVariants({ size: 'icon' }),
								'text-white hover:bg-primary bg-transparent',
								isActive && 'bg-primary'
							)}
						>
							<img
								src={link.src}
								alt={link.label}
								width={24}
								height={24}
								loading='lazy'
							/>
						</Link>
					)})}
				</div>

				{/* Right Side Content */}
				<div className='flex items-center space-x-4'>
					<NavigationMenu>
						<NavigationMenuList className='space-x-2'>
							{/* Become a Partner Navigation */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className='text-white bg-white/20 text-sm font-medium hidden sm:flex h-auto p-2 gap-2.5 rounded-3xl'>
									<Avatar className='h-[30px] w-[30px]'>
										<AvatarImage
											src='/placeholder.svg?height=32&width=32'
											alt='Mansur Isayev'
										/>
										<AvatarFallback className='bg-white text-black text-xs'>
											MI
										</AvatarFallback>
									</Avatar>
									Become a Partner
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className='grid gap-3 p-6 w-[300px]'>
										<div className='row-span-3'>
											<NavigationMenuLink asChild>
												<div className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-600 p-6 no-underline outline-none focus:shadow-md'>
													<Briefcase className='h-6 w-6 text-white' />
													<div className='mb-2 mt-4 text-lg font-medium text-white'>
														Partnership Program
													</div>
													<p className='text-sm leading-tight text-white/90'>
														Join our partner network and grow your business with
														us.
													</p>
												</div>
											</NavigationMenuLink>
										</div>
										<div className='grid gap-2'>
											<NavigationMenuLink asChild>
												<a
													className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													href='#'
												>
													<div className='flex items-center'>
														<Users className='mr-2 h-4 w-4' />
														<div className='text-sm font-medium leading-none'>
															Affiliate Program
														</div>
													</div>
													<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
														Earn commissions by referring new customers.
													</p>
												</a>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<a
													className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													href='#'
												>
													<div className='flex items-center'>
														<Award className='mr-2 h-4 w-4' />
														<div className='text-sm font-medium leading-none'>
															Reseller Program
														</div>
													</div>
													<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
														Become an authorized reseller of our products.
													</p>
												</a>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<a
													className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													href='#'
												>
													<div className='flex items-center'>
														<Shield className='mr-2 h-4 w-4' />
														<div className='text-sm font-medium leading-none'>
															Technology Partner
														</div>
													</div>
													<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
														Integrate your technology with our platform.
													</p>
												</a>
											</NavigationMenuLink>
										</div>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* User Profile Navigation */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className='text-white bg-white/20 text-sm font-medium hidden md:flex h-auto p-2 gap-2.5 rounded-3xl'>
									<Avatar className='h-[30px] w-[30px]'>
										<AvatarImage
											src='/placeholder.svg?height=32&width=32'
											alt='Mansur Isayev'
										/>
										<AvatarFallback className='bg-white text-black text-xs'>
											MI
										</AvatarFallback>
									</Avatar>
									Mansur Isayev
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className='grid gap-3 p-4 w-[300px]'>
										<div className='grid gap-1'>
											<NavigationMenuLink asChild>
												<a
													className='flex items-center select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													href='#'
												>
													<User className='mr-2 h-5 w-5' />
													<div>
														<div className='text-sm font-medium leading-none'>
															Profile
														</div>
														<p className='text-sm text-muted-foreground'>
															Manage your profile information
														</p>
													</div>
												</a>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<a
													className='flex items-center select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													href='#'
												>
													<Settings className='mr-2 h-5 w-5' />
													<div>
														<div className='text-sm font-medium leading-none'>
															Settings
														</div>
														<p className='text-sm text-muted-foreground'>
															Configure your preferences
														</p>
													</div>
												</a>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<a
													className='flex items-center select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													href='#'
												>
													<CreditCard className='mr-2 h-5 w-5' />
													<div>
														<div className='text-sm font-medium leading-none'>
															Billing
														</div>
														<p className='text-sm text-muted-foreground'>
															Manage billing and payments
														</p>
													</div>
												</a>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<a
													className='flex items-center select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													href='#'
												>
													<Bell className='mr-2 h-5 w-5' />
													<div>
														<div className='text-sm font-medium leading-none'>
															Notifications
														</div>
														<p className='text-sm text-muted-foreground'>
															Manage your notifications
														</p>
													</div>
												</a>
											</NavigationMenuLink>
											<hr className='my-2' />
											<NavigationMenuLink asChild>
												<a
													className='flex items-center select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
													href='#'
												>
													<HelpCircle className='mr-2 h-5 w-5' />
													<div>
														<div className='text-sm font-medium leading-none'>
															Help & Support
														</div>
														<p className='text-sm text-muted-foreground'>
															Get help and support
														</p>
													</div>
												</a>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<a
													className='flex items-center select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600'
													href='#'
												>
													<LogOut className='mr-2 h-5 w-5' />
													<div>
														<div className='text-sm font-medium leading-none'>
															Log out
														</div>
														<p className='text-sm text-muted-foreground'>
															Sign out of your account
														</p>
													</div>
												</a>
											</NavigationMenuLink>
										</div>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					{/* Avatar for mobile */}
					<Avatar className='h-8 w-8 md:hidden'>
						<AvatarImage
							src='/placeholder.svg?height=32&width=32'
							alt='Mansur Isayev'
						/>
						<AvatarFallback className='bg-white/20 text-white text-xs'>
							MI
						</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</header>
	)
}
