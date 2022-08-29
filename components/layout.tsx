import React from "react"
import { FC } from "react"
import { Navbar } from './navbar'
import { Selector } from './selector' 
import { Grid, Container } from '@mui/material'

interface Props {
    children: any;
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <Grid container xs={12} >
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid  container xs={2} sx={{minHeight:'calc(100vh - 115.5px)'}} justifyContent="center" alignItems="center">
                <Grid item>
                <Selector />
                </Grid>
            </Grid>
            <Grid item xs={10}>
{/* here will come more grid for the children */}
            <Container sx={{minHeight:'auto'}}>
                    {children}
            </Container>
            </Grid>
        </Grid>
    )
}