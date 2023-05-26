import React, {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'

const Feed = () => {
  return (
    <Stack sx={{flexDirection: {sx:'column', md: 'row'}}}>
        <Box sx={{height : {sx:'auto', md: '92vh'}}}>
        <Sidebar/>

        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff'}}>
          Copyright 2023 Kartik8Dwivedi
        </Typography>

        </Box>
    </Stack>
  )
}

export default Feed