import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { reload, updateProfile } from "firebase/auth";

const UserProfile = (props) => {
    const { user, setUser } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        updateProfile(user, {
            photoURL: data.image
        }).then(
            () => {

                setUser({ ...user, photoURL: data.image })
            }
        )

    }

    console.log(user)
    return (
        <div className="grid grid-cols-5 h-[70vh]">
            <div className="flex flex-col justify-center items-center col-span-1 gap-20 bg-slate-700 text-white">
                <div className="relative flex justify-center">
                    <img src={user.photoURL} className="w-2/5" alt="" />
                    <HiOutlinePencilAlt className="text-3xl absolute top-0 right-28" onClick={() => document.getElementById('my_modal_1').showModal()}></HiOutlinePencilAlt>

                    <dialog id="my_modal_1" className="modal ">
                        <div className="modal-box bg-black">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Image URL" className="input text-black input-bordered" {...register("image")} required />
                                    <button className="mt-2 mx-auto btn w-1/5">Submit</button>
                                </div>
                            </form>

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>

                <div className="space-y-4">
                    <p><span className="text-2xl font-bold">Name: </span> <span className="text-lg">{user.displayName}</span> </p>
                    <p><span className="text-2xl font-bold">Email: </span> <span className="text-lg">{user.email}</span></p>

                </div>

            </div>
            <div className="col-span-4 flex justify-center items-center">
                No Property
            </div>

        </div>
    )
};

export default UserProfile;
