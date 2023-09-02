import Image from 'next/image'
import Carousel from '../../components/slider'
import { Box } from '@mui/material'

export default function Home() {
  return (
   <>
   <Box width={{sm:"100vw"}} height={{sm:"200px"}}>
   <Carousel/>
   </Box>
   </>
  )
}
