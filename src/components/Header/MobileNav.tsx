import { ChangeEventHandler, FC, useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

import { DesktopNavProps } from './DesktopNav'

import { Link, ThemeSwitcher } from 'src/components'
import { useAppSelector } from 'src/hooks'
import { ThemeMode } from 'src/types'

interface MobileNavProps extends DesktopNavProps {
  handleThemeSwitch: ChangeEventHandler<HTMLInputElement>
}

export const MobileNav: FC<MobileNavProps> = ({
  navbarItems,
  handleThemeSwitch,
}) => {
  const { mode } = useAppSelector((state) => state.theme)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => setIsOpen(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box role="presentation">
          <List>
            {navbarItems.map((item) => (
              <ListItem
                key={item.path}
                disablePadding
                onClick={() => setIsOpen(false)}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link to={item.path}>
                    <ListItemText primary={item.title} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem sx={{ width: '100%', pl: 0 }}>
              <ThemeSwitcher
                checked={mode === ThemeMode.DARK}
                onChange={handleThemeSwitch}
                mode={ThemeMode.DARK}
                sx={{ m: 0, display: { xs: 'flex', md: 'none' } }}
              />
              <Typography textTransform="capitalize">{mode} mode</Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}
