
export const datafromgithub = async () => {
    const repo_url = "https://api.github.com/repos/adeshsinghbits/javaSript-projects/contents"
    let repoContent = await fetch(repo_url).then((res) => res.json());
    console.log(repoContent[1].name);
    
    let data =repoContent.filter((item) => (item.path != "1Application-frontend" ? true : false))
    data = data.filter((item) => ((item.path).match(/[. /]/g) == null? true : false));
    data = data.map((item) => item.name);
    return data;
}
