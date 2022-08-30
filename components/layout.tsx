import React from "react"
import { FC } from "react"
import { Navbar } from './navbar'
import { Selector } from './selector' 
import { Grid, Container } from '@mui/material'
import {useState} from 'react'
import { About } from './about'
import { Projects } from './projects'

export const Layout = () => {
    const [content, setContent] = useState('ABOUT');

    return (
        <Grid container xs={12} >
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid  container xs={3} sx={{minHeight:'calc(100vh - 115.5px)'}}>
                <Grid container item justifyContent="center" alignItems="center">
                <Selector setContent = {setContent}></Selector>
            </Grid>
            </Grid>
            <Grid item xs={9}>
{/* here will come more grid for the children */}
            <Container sx={{minHeight:'auto'}}>
                    {content === 'ABOUT' && <About></About>}
                    {content === 'PROJECTS' && <Projects></Projects>}
                    
            </Container>
            </Grid>
        </Grid>
    )
}