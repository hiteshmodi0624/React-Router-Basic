import MainNavigation from "../components/MainNavigation";

const ErrorPage=()=>{
    return (
        <>
            <MainNavigation/>
            <main>
                <h1>An Error has occured.</h1>
                <h2>Couldn't find this page!</h2>
            </main>
        </>
    )
}
export default ErrorPage