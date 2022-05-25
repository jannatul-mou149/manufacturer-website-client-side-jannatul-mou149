import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { toast } from 'react-toastify';


const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);
    const { name: productName, price, img, min_order: minQuantity, quantity: stockQuantity } = product;
    const [quantity, setQuantity] = useState(parseInt(product.minQuantity));

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        let order = { productName, quantity: quantity || minQuantity, img, price, name: data.name, address: data.address, phone: data.phone, email: user?.email };
        const total_price = order.quantity * order.price;
        order = { ...order, total_price };
        console.log(order);
        fetch('http://localhost:5000/new-order', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast.success('Successfully Placed your Order. Please Do Payment for your order')
        reset()
    };
    // if(errors) console.log(errors);
    return (
        <div className="px-2 mb-40">
            <h3 className="text-5xl text-center  font-bold  text-indigo-800 py-12 px-4">
                Your Dream Product
            </h3>

            <div className="card max-w-5xl mx-auto md:card-side bg-base-100 shadow-xl lg:flex-row-reverse md:flex-row-reverse">
                <figure>
                    <img className="p-4" src={img} alt="Album" />
                </figure>
                <div className="card-body flex items-center justify-center">
                    <h2 className="card-title text-indigo-800">{productName}</h2>
                    <div className="card-actions items-center justify-around">
                        <div>
                            <p className="text-indigo-700 font-bold">
                                Price: ${price}
                                <sub className="text-secondary"> /piece</sub>
                            </p>
                        </div>
                        <div className="flex gap-4 py-2 font-semibold">
                            <div
                                className="badge badge-ghost text-semibold"
                                data-tip="Min order quantity"
                            >
                                Min Order : {minQuantity}
                            </div>
                            <div
                                className="badge badge-success text-white"
                                data-tip="Available quantity"
                            >
                                In Stock : {stockQuantity}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 ">


                    </div>


                    {/* form  */}
                    <div className="w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 p-4">
                            <input
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                type="number"
                                defaultValue={minQuantity}
                                placeholder="Order Quantity"
                                className="input input-bordered w-full"

                            />
                            {
                                quantity > stockQuantity && <p className="text-[#FF0000]">Order Less than {stockQuantity}</p>
                            }
                            {
                                quantity < minQuantity && <p className="text-[#FF0000]">Order more than {minQuantity}</p>
                            }
                            <input   {...register("name", { required: true })} placeholder="Name" defaultValue={user?.displayName} className="input input-bordered " />
                            <input   {...register("email", { required: true })} placeholder="Name" defaultValue={user?.email} className="input input-bordered " readOnly />

                            <input  {...register("address", { required: true })} placeholder="Address" type="text" className="input input-bordered " />
                            <input  {...register("phone", { required: true })} placeholder="Phone" type="text" className="input input-bordered " />
                            <button
                                disabled={quantity < minQuantity || quantity > stockQuantity}
                                className="btn btn-primary"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;