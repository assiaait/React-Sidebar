import {ViewGridIcon,
    DocumentIcon,
    PresentationChartLineIcon,
    ChartSquareBarIcon,
    CogIcon,
    InboxIcon
} from '@heroicons/react/solid'

export const NavData =[
    {
        id:1,
        icon:<ViewGridIcon className='w-8'/>,
        title:'Dashboard',
    },
    {
        id:2,
        icon:<DocumentIcon className='w-8'/>,
        title:'Appointments'
    },
    {
        id:3,
        icon:<PresentationChartLineIcon className='w-8'/>,
        title:'Activity'
    },
    {
        id:4,
        icon:<InboxIcon className='w-8'/>,
        title:'Messages'
    },
    {
        id:5,
        icon:<ChartSquareBarIcon className='w-8'/>,
        title:'Statistic'
    },
    {
        id:6,
        icon:<CogIcon className='w-8'/>,
        title:'Settings'
    },
]