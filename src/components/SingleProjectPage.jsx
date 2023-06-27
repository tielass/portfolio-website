import React from 'react'
import { useParams } from 'react-router-dom'
import { projectsDb } from '../helpers/projectsDb'
import { illustrationDb } from '../helpers/illustrationDb'


function SingleProjectPage() {

  const { id } = useParams()
  const projects = projectsDb.find(project => project.id === id)

  return (
    <div className='single--page'>
      <p>single</p>
    </div>
  )
}

export default SingleProjectPage
