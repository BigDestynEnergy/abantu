import AppLayout from "./UI/App Layout";

export default function Home({user}){

    return(
        <div className="homepage">
            <h1>{user}</h1>
            <AppLayout />
        </div>
    )
}