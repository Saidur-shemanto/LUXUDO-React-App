import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

const UserProfile = (props) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="grid grid-cols-5 h-[70vh]">
            <div className="flex flex-col justify-center items-center col-span-1 gap-20 bg-slate-700 text-white">
                <img src={user.photoURL} alt="" />
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
