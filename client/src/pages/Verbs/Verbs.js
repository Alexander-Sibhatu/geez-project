import React, { useEffect, useState } from 'react'
import { fetchVberbs } from '../../features/useFetch'
import VerbPage from '../VerbsPage/VerbsPage'
import Layout from '../../components/Layout/Layout'

const Verbs = () => {
  const [verbs, setVerbs] = useState([])

  const fetchData = async () => {
    const data = await fetchVberbs();
    setVerbs(data);
  }

  useEffect(() => {
    fetchData();
  }, [])


  const verbElements = verbs && verbs.length > 0 ? (
    verbs.map((verb, index) => <VerbPage key={index} verb={verb} />)
) : (
  <p>Loading... </p>
)
  return (
    <Layout>
      <div className="flex flex-col bg-[#F4E1C1] h-screen gap-4 p-4">
        <h1 className="text-2xl text-center ">ግስ</h1> {verbElements}
      </div>
    </Layout>
  );
}

export default Verbs