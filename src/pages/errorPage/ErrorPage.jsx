import { useNavigate } from "react-router-dom";

const ErrorPage = (props) => {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)

    }
    return (

        <div className="flex flex-col justify-center items-center h-[100vh] gap-4">
            <h1 className="font-bold text-8xl">404 Not Found</h1>
            <button onClick={handleGoBack} className="btn bg-black text-white">Go back</button>

        </div>
    )
};

export default ErrorPage;
