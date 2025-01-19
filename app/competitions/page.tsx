import Competitions from "@/components/Competitions"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Competitions',
  description: 'View Football Competitions Standings',
}

const CompetitionsPage = () => {
  return (<Competitions/ >)
}

export default CompetitionsPage