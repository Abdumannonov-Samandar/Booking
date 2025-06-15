import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hotel/')({
  component: Hotel,
})

function Hotel() {
  return <div className='text-red-700'>Hello "/hotel/"!</div>
}
