import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function AddVisa() {
     const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
     } = useForm();

     const onSubmit = async (data) => {
          const id = toast.loading("Visa info verifying....")
          const res = await fetch(import.meta.env.VITE_ULR + "/visa", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify(data)
          })
          const response = await res.json()
          if (response.success) {
               toast.success(response?.message || "created ", { id })
               reset()
          } else {
               toast.error(response?.message || "Something went wrong", { id })
          }

     };

     return (
          <section className="max-w-3xl mx-auto p-6 bg-base-200 rounded-2xl shadow-lg my-10">
               <h2 className="text-2xl font-bold mb-6 text-center">Add New Visa</h2>

               <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

                    {/* Country Image URL */}
                    <div>
                         <label className="label"><span className="label-text">Country Image URL</span></label>
                         <input
                              type="url"
                              placeholder="https://i.ibb.co/example.jpg"
                              className="input input-bordered w-full"
                              {...register("countryImage", { required: "Image URL is required" })}
                         />
                         {errors.countryImage && <p className="text-red-500 text-sm">{errors.countryImage.message}</p>}
                    </div>

                    {/* Country Name */}
                    <div>
                         <label className="label"><span className="label-text">Country Name</span></label>
                         <input
                              type="text"
                              placeholder="Enter country name"
                              className="input input-bordered w-full"
                              {...register("countryName", { required: "Country name is required" })}
                         />
                         {errors.countryName && <p className="text-red-500 text-sm">{errors.countryName.message}</p>}
                    </div>

                    {/* Visa Type */}
                    <div>
                         <label className="label"><span className="label-text">Visa Type</span></label>
                         <select
                              className="select select-bordered w-full"
                              {...register("visaType", { required: "Visa type is required" })}
                         >
                              <option value="">Choose visa type</option>
                              <option value="Tourist visa">Tourist visa</option>
                              <option value="Student visa">Student visa</option>
                              <option value="Official visa">Official visa</option>
                         </select>
                         {errors.visaType && <p className="text-red-500 text-sm">{errors.visaType.message}</p>}
                    </div>

                    {/* Processing Time */}
                    <div>
                         <label className="label"><span className="label-text">Processing Time</span></label>
                         <input
                              type="text"
                              placeholder="e.g., 10 days"
                              className="input input-bordered w-full"
                              {...register("processingTime", { required: "Processing time is required" })}
                         />
                         {errors.processingTime && <p className="text-red-500 text-sm">{errors.processingTime.message}</p>}
                    </div>

                    {/* Required Documents */}
                    <div>
                         <label className="label"><span className="label-text">Required Documents</span></label>
                         <div className="flex flex-col space-y-2">
                              <label className="flex items-center gap-2">
                                   <input type="checkbox" value="Valid passport" {...register("requiredDocuments")} className="checkbox" />
                                   Valid passport
                              </label>
                              <label className="flex items-center gap-2">
                                   <input type="checkbox" value="Visa application form" {...register("requiredDocuments")} className="checkbox" />
                                   Visa application form
                              </label>
                              <label className="flex items-center gap-2">
                                   <input type="checkbox" value="Recent passport-sized photograph" {...register("requiredDocuments")} className="checkbox" />
                                   Recent passport-sized photograph
                              </label>
                         </div>
                    </div>

                    {/* Description */}
                    <div>
                         <label className="label"><span className="label-text">Description</span></label>
                         <textarea
                              className="textarea textarea-bordered w-full"
                              rows="4"
                              placeholder="Write visa description..."
                              {...register("description", { required: "Description is required" })}
                         />
                         {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                    </div>

                    {/* Age Restriction */}
                    <div>
                         <label className="label"><span className="label-text">Age Restriction</span></label>
                         <input
                              type="number"
                              className="input input-bordered w-full"
                              placeholder="e.g., 18"
                              {...register("ageRestriction", { required: "Age restriction is required", min: 1 })}
                         />
                         {errors.ageRestriction && <p className="text-red-500 text-sm">{errors.ageRestriction.message}</p>}
                    </div>

                    {/* Fee */}
                    <div>
                         <label className="label"><span className="label-text">Fee (in USD)</span></label>
                         <input
                              type="number"
                              className="input input-bordered w-full"
                              placeholder="e.g., 100"
                              {...register("fee", { required: "Fee is required", min: 0 })}
                         />
                         {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}
                    </div>

                    {/* Validity */}
                    <div>
                         <label className="label"><span className="label-text">Validity</span></label>
                         <input
                              type="text"
                              placeholder="e.g., 6 months"
                              className="input input-bordered w-full"
                              {...register("validity", { required: "Validity is required" })}
                         />
                         {errors.validity && <p className="text-red-500 text-sm">{errors.validity.message}</p>}
                    </div>

                    {/* Application Method */}
                    <div>
                         <label className="label"><span className="label-text">Application Method</span></label>
                         <input
                              type="text"
                              placeholder="e.g., Online or Embassy"
                              className="input input-bordered w-full"
                              {...register("applicationMethod", { required: "Application method is required" })}
                         />
                         {errors.applicationMethod && <p className="text-red-500 text-sm">{errors.applicationMethod.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-6">
                         <button type="submit" className="btn btn-primary w-full">Add Visa</button>
                    </div>
               </form>
          </section>
     );
}
