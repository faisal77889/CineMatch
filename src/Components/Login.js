import Header from "./Header"
const Login = () => {
    return (
        <div>
            <Header />
            <div className="box">
                <div className="items">
                    <div className="login-contents">
                        <div>Sign In</div>
                        <div>
                            <form>
                                <div>
                                    <input placeholder="email or username"></input>
                                </div>
                                <div>
                                    <input placeholder="password"></input>
                                </div>
                            </form>
                        </div>
                        <div>
                            <button>Sign In</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login;