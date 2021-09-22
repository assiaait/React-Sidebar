import { HeartIcon, LogoutIcon} from '@heroicons/react/solid'

import NavItem from "./components/NavItem";
import { NavData } from './data/NavData';

function App() {
 
  return (
    <div className='App'>
      <div className='flex space-x-2 p-8 '>
        <HeartIcon className='w-8 text-purple-600' />
        <h1 className=' font-bold text-xl hidden md:inline '>Healty</h1>
      </div>
      {NavData.map(({ id, icon, title }) => (
        <NavItem key={id} index={id} icon={icon} title={title} />
      ))}
      <div className='flex space-x-2 p-8 text-red-800'>
        <LogoutIcon className='w-6 ' />
        <p>Log Out</p>
      </div>
    </div>
  )
}

export default App;
