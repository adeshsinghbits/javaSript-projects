        import { useState } from "react";
        import axios from "axios";


        function Profile() {
        const [username, setUsername] = useState("");
        const [userData, setUserData] = useState(null);
        const [repos, setRepos] = useState([]);
        const [error, setError] = useState("");
        const [createdDate, setCreatedDate] = useState()

        const fetchGitHubData = async () => {
            try {
            setError("");
            setUserData(null);
            setRepos([]);

            const userResponse = await axios.get(`https://api.github.com/users/${username}`);
            setUserData(userResponse.data);
            const date = userData.created_at
            setCreatedDate(new Date(date).toLocaleString("en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }
            ));
            
            
            const repoResponse = await axios.get(
                `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
            );
            setRepos(repoResponse.data);
            } catch (err) {
            setError("User not found or API limit exceeded");
            console.log(err);
            
            }
    };

    return (
    <div className="font-sans bg-gray-400">
        <div className="text-center p-5 ">
            <div className="my-5 ">
                <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2.5 w-72 mr-2.5 border-gray-600 rounded-md"
                />
                <button onClick={fetchGitHubData}
                    className="py-2.5 px-4 bg-blue-500 text-white border-none rounded-md cursor-pointer hover:bg-blue-800"
                >Search</button>
        </div>
        <div className="flex  flex-wrap">
            {error && <p className="text-red-600 mt-5">{error}</p>}

            {userData && (
                <div className="mt-5 p-5 bg-white w-96 rounded-lg shadow-lg inline-block text-left">
                <img src={userData.avatar_url} alt={userData.login}
                    className="w-40 rounded-full"
                />
                <h2
                    className="my-2.5 text-3xl font-semibold"
                >{userData.name || userData.login}</h2>
                <h2
                    className=" text-lg font-normal"
                >{userData.login}</h2>
                <p>{userData.bio}</p>
                <p>
                    <strong>Followers:</strong> {userData.followers} | <strong>Following:</strong>{" "}
                    {userData.following}
                </p>
                <p>
                    <strong>Public Repos:</strong> {userData.public_repos}
                </p>
                <p>
                    <strong>Address:</strong>{userData.location}
                </p>
                <p><strong>Created At: </strong>{createdDate}</p>
                
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer"
                    className="text-blue-400 hover:underline hover:decoration-blue-800"
                >
                    View Profile
                </a>
            </div>
            )}

            {repos.length > 0 && (
            <div className="mt-7 text-left  ml-auto mr-auto">
                <h3 className="text-xl bg-white block text-center rounded-lg font-medium py-3 w-96  ">Repositories:</h3>
                <ul className="list-none p-0 flex flex-wrap gap-4">
                    {repos.map((repo) => (
                    <li key={repo.id} className="bg-white my-2.5 p-4 rounded-lg shadow-md">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
                        className="text-xl font-bold text-blue-600  hover:underline hover:decoration-blue-600"
                        >
                        {repo.name}
                        </a>
                        <p className="my-1 text-lg">{repo.description}</p>
                        <p>
                            stars: ⭐ {repo.stargazers_count} | Forks:🍴 {repo.forks_count}
                        </p>
                    </li>
                    ))}
                </ul>
                </div>
            )}
            </div>
        </div>
    </div>
        );
    }

export default Profile;
