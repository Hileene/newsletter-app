import React from 'react'
import { List, ListItem, ListItemIcon, Box, Typography } from '@mui/material'
import ListIcon from '../../assets/images/icon-list.svg'

function IconList() {
  return (
    <Box sx={{ fontFamily: 'Roboto, sans-serif', width: '100%' }}>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}
      >
        {[
          'Product discovery and building what matters',
          'Measuring to ensure updates are a success',
          'And much more!',
        ].map((text, index) => (
          <ListItem key={index} sx={{ padding: '0', alignItems: 'flex-start' }}>
            <ListItemIcon
              sx={{
                minWidth: '3rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img src={ListIcon} alt="List icon svg" />
            </ListItemIcon>
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: '1',
                color: 'hsl(234, 29%, 20%)',
              }}
            >
              {text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default IconList
