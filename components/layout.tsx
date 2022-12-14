import React from "react"
import { Navbar } from './navbar'
import { Selector } from './selector' 
import { Grid, Box } from '@mui/material'
import {useState} from 'react'
import { About } from './about'
import { Projects } from './projects'
import { Cv } from "./cv"
import { Recommendations } from "./recommendations"
import { Illustrations } from "./illustrations"

export const Layout = () => {
    const [content, setContent] = useState('ABOUT');

    return (
        <Grid container item xs={12} >
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid  container item xs={3} sx={{minHeight:'calc(100vh - 115.5px)'}}>
                <Grid container item justifyContent="center" alignItems="center">
                <Selector setContent = {setContent}></Selector>
                </Grid>
            </Grid>
            <Grid container item xs={9}>
{/* here will come more grid for the children */}
            <Box sx={{minHeight:'auto'}}>
                    {content === 'ABOUT' && <About />}
                    {content === 'PROJECTS' && <Projects />}
                    {content === 'CV' && <Cv />}
                    {content === 'RECOMMENDATIONS' && <Recommendations />}
                    {content === 'ILLUSTRATIONS' && <Illustrations />}
            </Box>
            </Grid>
        </Grid>
    )
}