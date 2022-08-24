import { useLocation, useNavigate } from "react-router-dom";

function Home(props) {
    const user = useLocation();
    const naviagte = useNavigate();

    const handleLogOut = () => {
        /* global google */
        alert("You have logoed out");
        google.accounts.id.disableAutoSelect();
        naviagte("/");
    }
    
    return (
		<div>
			<h1>
				Welcome to Home {user.state === null ? null : user.state.name}
			</h1>
			<p>This is the home page</p>
			<div>
				{user.state === null ? null : (
					<div>
						<img src={`${user.state.image}`}></img>
						<p>{user.state.name}</p>
						<p>{user.state.email}</p>
					</div>
				)}
			</div>
            {user.state!==null&&(<button onClick={handleLogOut}>Logout</button>)}
		</div>
	);
}

export default Home;