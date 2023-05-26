import {Stack} from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = () => {
  return (
    <Stack direction="row" sx={{overflowy: "auto", height : {sx : 'auto', md : '95%'}, flexDirection: {md: 'column'}}}>
    {
        categories.map((category)=>{
            console.log(category);
            <button className='category-btn'>
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        })
    }


    </Stack>
  )
}

export default Sidebar