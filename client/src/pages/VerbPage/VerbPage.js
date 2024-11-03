import React, { useEffect, useState } from 'react'
import { fetchVberbs } from '../../features/useFetch'
import classes from './verbPage.module.css'


const VerbPage = () => {
  const [verbs, setVerbs] = useState([])

  const fetchData = async () => {
    const data = await fetchVberbs();
    console.log(data)
    setVerbs(data);
  }

  useEffect(() => {
    fetchData();
  }, [])


  const verbElements = verbs && verbs.length > 0 ? (
    verbs.map((verb, index) => (
    <div key={index} className={classes.verb}>
      <p><strong>Gis: </strong> {verb.Gis}</p>
    </div>
  ))
) : (
  <p>Loading... </p>
)
  return (
    <div>{verbElements}</div>
  )
}

export default VerbPage