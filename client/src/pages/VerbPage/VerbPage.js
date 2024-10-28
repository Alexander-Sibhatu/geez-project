import React, { useEffect, useState } from 'react'
import { fetchVberbs } from '../../features/useFetch'
import classes from './verbPage.module.css'


const VerbPage = () => {
  const [verbs, setVerbs] = useState([])

  const fetchData = async () => {
    const data = await fetchVberbs();
    setVerbs(data);
  }

  useEffect(() => {
    fetchData();
  })

  const verb = verbs.map((verb, index) => (
    <div key={index} className={classes.verb}>
      <p><strong>Gis: </strong> {verb.Gis}</p>
    </div>
  ))

  return (
    <div>{verb}</div>
  )
}

export default VerbPage