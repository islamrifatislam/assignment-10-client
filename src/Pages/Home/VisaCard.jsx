import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function VisaCard() {
     const [data, setData] = useState()
     const [loading, setLoading] = useState(true)
     useEffect(() => {
          const fetchData = async () => {
               const res = await fetch(import.meta.env.VITE_ULR + "/visa")
               const { data } = await res.json()
               setData(data)
               setLoading(false)
          }
          fetchData()
     }, [])
     if (loading) return;
     return (
          <div className="my-20">
               <h2 class="text-3xl font-bold mb-8 text-center">Latest Visas</h2>

               <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                         data?.slice(0,6)?.map(visa =>
                              <div key={visa?._id} class="card bg-base-200 shadow-xl">
                                   <figure>
                                        <img src={visa?.countryImage} />
                                   </figure>
                                   <div class="card-body">
                                        <h3 class="card-title">{visa?.countryName}</h3>
                                        <p><strong>Visa Type:</strong> {visa?.visaType}</p>
                                        <p><strong>Processing Time:</strong> {visa?.processingTime}</p>
                                        <p><strong>Fee:</strong> ${visa?.fee}</p>
                                        <p><strong>Validity:</strong>{visa?.validity}</p>
                                        <p><strong>Application Method:</strong> {visa?.applicationMethod}</p>
                                        <div class="card-actions justify-end">
                                             <Link to={`/all-visa/${visa._id}`} class="btn btn-primary">See Details</Link>
                                        </div>
                                   </div>
                              </div>
                         )
                    }
               </div>


               <div class="flex justify-center mt-10">
                    <a href="/all-visas" class="btn btn-outline btn-primary">See all visas</a>
               </div>
          </div>
     )
}
