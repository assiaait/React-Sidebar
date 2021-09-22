import { MapIcon } from '@heroicons/react/solid'

const NavItem = ({ index, icon, title }) => {
  return (
    <div>
      <div className='flex pb-8 cursor-pointer space-x-2  pl-8 '>
        <div className='hover:text-purple-600 '>{icon}</div>
        <h1 className=' text-lg hidden md:inline '>{title}</h1>
      </div>
    </div>
  )
}
export default NavItem
