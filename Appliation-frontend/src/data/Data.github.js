
export const datafromgithub = async () => {
    const repo_url = "https://api.github.com/repos/adeshsinghbits/javaSript-projects/contents"
    let repoContent = await fetch(repo_url).then((res) => res.json());
    
    let data =repoContent.filter((item) => (item.path != "images" ? true : false))
    data = data.filter((item) => ((item.path).match(/[. /]/g) == null? true : false));
    data = data.map((item) => item.name);
    return data;
}

export const profilegithub = async () => {
    const profile_url = "https://api.github.com/users/adeshsinghbits"
    let profile = await fetch(profile_url).then((res) => res.json())    
    console.log(profile.name);
    
    return profile;
}
