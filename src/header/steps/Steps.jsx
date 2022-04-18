import { Box, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const Steps = () => {
  return (
    <>
        <Box sx={{ width: '100%' }}>
            <Stepper alternativeLabel>
                <Step>
                    <StepLabel>1</StepLabel>
                </Step>
                <Step>
                    <StepLabel>2</StepLabel>
                </Step>
                <Step>
                    <StepLabel>3</StepLabel>
                </Step>
            </Stepper>
        </Box>
    </>
  )
}

export default Steps