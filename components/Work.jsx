// 'use client'
import { getWork } from '@/sanity_studio/query'
import Link from 'next/link'
import { urlFor } from '@/sanity_studio/client'
import client from '@/sanity_studio/client'
import Image from 'next/image'


const Work = async () => {
  // const [works,setAllWorks] = useState([])
  const work = await getWork()

  console.log(work)

  return (
    <div className='flex gap-8 flex-wrap mx-14 content-center mb-6'>
      
        {/* {work.map((w)=>(<div key={w._id}><Image src={w.companyLogo} width={200} height={150} alt={w.companyLogo.alt} /></div>))} */}
         {work?.map((w)=>(
          <div className="card w-96 bg-base-100 shadow-xl" key={w._id}>
            {/* <figure><img src={urlFor(w.companyLogo.image)} alt={w.companyLogo.alt} /></figure> */}
            <div className="card-body">
              <h2 className="card-title">
                {w.company}
              </h2>
              <p>{w.job_description }</p>
              <div className="card-actions justify-end">
                <a href={w.siteurl} target="_blank"><div className="badge badge-outline">View Site</div></a> 
                <a href={w.githublink} target="_blank"><div className="badge badge-outline">Github</div></a>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

// export const getServerSideProps = async () => {
// //   query = '*[_type == "work"]'
// //   const works = await client.fetch(query)

// //   return{props:{works}}
// // }
export default Work