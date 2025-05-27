import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


export default function VisaDetails() {
     const { id } = useParams();
     const [loading, setLoading] = useState(true)
     const [visa, setVisa] = useState(null);
     const [showModal, setShowModal] = useState(false);

     useEffect(() => {
          const loadVisa = async () => {
               const res =await fetch(import.meta.env.VITE_ULR + `/visa/${id}`)
               const { data } = await res.json()
               console.log(data)
               setVisa(data)
               setLoading(false)
          }
          loadVisa()
     }, [id]);

     const handleApply = async (e) => {
     };
     console.log(visa)

     if (loading) return <p className="text-center mt-10">Loading visa details...</p>;

     return (
          <div className="max-w-4xl mx-auto px-4 py-10">
               <div className="bg-base-200 rounded-xl p-6 shadow-md">
                    <img src={visa?.countryImage} alt={visa?.country} className="w-full max-h-64 object-cover rounded-lg mb-4" />
                    <h1 className="text-3xl font-bold mb-2">{visa?.country}</h1>
                    <p><strong>Visa Type:</strong> {visa?.visaType}</p>
                    <p><strong>Processing Time:</strong> {visa?.processingTime}</p>
                    <p><strong>Required Documents:</strong> {visa?.requiredDocuments?.join(", ")}</p>
                    <p><strong>Validity:</strong> {visa?.validity}</p>
                    <p><strong>Fee:</strong> ${visa?.fee}</p>
                    <p><strong>Application Method:</strong> {visa?.applicationMethod}</p>
                    <p><strong>Age Restriction:</strong> {visa?.ageRestriction}</p>
                    <p className="mt-4">{visa?.description}</p>

                    <button
                         onClick={() => setShowModal(true)}
                         className="btn btn-primary mt-6"
                    >
                         Apply for the Visa
                    </button>
               </div>

               {/* Modal */}
               {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center ">
                         <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
                              <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-gray-500 text-xl font-bold">&times;</button>
                              <h2 className="text-xl font-semibold mb-4">Apply for Visa</h2>

                              <form onSubmit={handleApply} className="space-y-4">
                                   <div>
                                        <label className="block text-sm font-medium">Email</label>
                                        <input type="email"  readOnly className="input input-bordered w-full bg-gray-100" />
                                   </div>

                                   <div className="flex gap-2">
                                        <div className="w-1/2">
                                             <label className="block text-sm font-medium">First Name</label>
                                             <input name="firstName" type="text" required className="input input-bordered w-full" />
                                        </div>
                                        <div className="w-1/2">
                                             <label className="block text-sm font-medium">Last Name</label>
                                             <input name="lastName" type="text" required className="input input-bordered w-full" />
                                        </div>
                                   </div>

                                   <div>
                                        <label className="block text-sm font-medium">Applied Date</label>
                                        <input type="text" value={new Date().toISOString().split("T")[0]} readOnly className="input input-bordered w-full bg-gray-100" />
                                   </div>

                                   <div>
                                        <label className="block text-sm font-medium">Fee</label>
                                        <input type="text" value={`$${visa.fee}`} readOnly className="input input-bordered w-full bg-gray-100" />
                                   </div>

                                   <button type="submit" className="btn btn-primary w-full">Apply</button>
                              </form>
                         </div>
                    </div>
               )}
          </div>
     );
}
