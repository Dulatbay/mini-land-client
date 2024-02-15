import {Bounce, ToastContainer} from "react-toastify";



function App() {
    return (
        <>
            <ToastContainer position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss={false}
                            draggable
                            pauseOnHover={false}
                            theme="dark"
                            transition={Bounce}
            />
        </>
    )
}

export default App;