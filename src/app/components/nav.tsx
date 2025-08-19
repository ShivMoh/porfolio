"use client"

import { Box, Link } from "@mui/material"

export default function Nav() {
  return <>

    <Box
      sx={{
        marginTop: '2vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
    >

      <Link href="/portfolio" underline="hover" color="white">Home</Link>
      <Link href="/portfolio/about" underline="hover" color="white">About</Link>
      <Link href="/portfolio/projects" underline="hover" color="white">Projects</Link>
      <Link href="/portfolio/organizations" underline="hover" color="white">Organizations</Link>
    </Box>
  </>
}
