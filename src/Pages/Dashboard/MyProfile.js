import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [singleUser, setUserinfo] = useState({})


    let email = user?.email;
    const userImg = user?.photoURL;

    useEffect(() => {
        fetch(`https://pure-cliffs-15419.herokuapp.com/user/${email}`)
            .then(res => res.json())
            .then(data => { setUserinfo(data) })
    }, [email])



    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {

        let updateUser = { name: singleUser.name, email: singleUser.email, linkedIn: data.linkedIn, education: data.education, location: data.location, phone: data.phone }
        console.log(data);
        fetch(`https://pure-cliffs-15419.herokuapp.com/user/${email}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateUser),
        })
            .then(res => res.json())
            .then(data => {
                const refetch = () => {
                    fetch(`https://pure-cliffs-15419.herokuapp.com/user/${email}`)
                        .then(res => res.json())
                        .then(data => { setUserinfo(data) })
                }
                refetch()
                console.log(data)
            }


            )


        reset()

    }

    return (
        <div>
            <h1 class="text-xl font-bold text-center">My Profile</h1>
            <div class="flex h-screen justify-center">
                <div className='pt-20'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <div class="avatar online">
                                <div class="w-24 rounded-full">
                                    <img src="https://zetamu.pse.org/wp-content/uploads/2019/02/1041_boy_c-512.png" />
                                </div>
                            </div>
                        </figure>
                        <div class="card-body items-center text-center">
                            <div className='text-left'>
                                <h1 class="font-bold text-center text-green-500 text-xl mb-6">{singleUser?.name}</h1>
                                <p><span className='font-bold'>LinkedIn:</span> {singleUser?.linkedIn}</p>
                                <p><span className='font-bold'>Email:</span> {singleUser?.email}</p>
                                <p><span className='font-bold'>Education:</span> {singleUser?.education}</p>
                                <p><span className='font-bold'>Location:</span> {singleUser?.location}</p>
                                <p><span className='font-bold'>Phone No:</span> {singleUser?.phone}</p>
                            </div>
                            <a href="#update"><button class="btn btn-sm btn-outline btn-success mt-4">Update Profile</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex h-screen justify-center items-center' id='update'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Edit Your Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={singleUser?.name}
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">LinkedIn</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Your LinkedIn"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("linkedIn", {
                                        required: {
                                            value: true,
                                            message: 'LinkedIn is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedIn.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input
                                    type="text"

                                    defaultValue={singleUser?.email}
                                    placeholder="Your Email Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Your Education"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: 'Education is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Your Location"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("location", {
                                        required: {
                                            value: true,
                                            message: 'Location is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone No</span>
                                </label>
                                <input

                                    type="number"

                                    placeholder="Your Phone No"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone No is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Save" />
                        </form>


                    </div>
                </div>
            </div >

        </div>
    );
};

export default MyProfile;