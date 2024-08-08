import React from 'react'
import { List, ListItem, ListItemIcon, Box, Typography } from '@mui/material'
import ListIcon from '../../assets/images/icon-list.svg'
import './iconlist.css'

function IconList() {
  return (
    /*Customized Material UI components to override default styles*/
    <Box
      sx={{
        fontFamily: 'Roboto, sans-serif',
        color: 'hsl(234, 29%, 20%)',
      }}
    >
      <List
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1rem',
          paddingBottom: '2rem',
          paddingTop: '1.5rem',
        }}
      >
        <ListItem
          sx={{ paddingTop: '0', paddingBottom: '0', alignItems: 'flex-start' }}
        >
          <ListItemIcon sx={{ minWidth: '3rem' }}>
            <img src={ListIcon} alt="List icon svg" className="signup-icon" />
          </ListItemIcon>
          <Typography sx={{ fontWeight: '400', fontSize: '1rem' }}>
            Product discovery and building what matters
          </Typography>
        </ListItem>
        <ListItem
          sx={{ paddingTop: '0', paddingBottom: '0', alignItems: 'flex-start' }}
        >
          <ListItemIcon sx={{ minWidth: '3rem' }}>
            <img src={ListIcon} alt="List icon svg" className="signup-icon" />
          </ListItemIcon>
          <Typography sx={{ fontWeight: '400', fontSize: '1rem' }}>
            Measuring to ensure updates are a success
          </Typography>
        </ListItem>
        <ListItem
          sx={{ paddingTop: '0', paddingBottom: '0', alignItems: 'flex-start' }}
        >
          <ListItemIcon sx={{ minWidth: '3rem' }}>
            <img src={ListIcon} alt="List icon svg" className="signup-icon" />
          </ListItemIcon>
          <Typography sx={{ fontWeight: '400', fontSize: '1rem' }}>
            And much more!
          </Typography>
        </ListItem>
      </List>
    </Box>
  )
}

export default IconList
