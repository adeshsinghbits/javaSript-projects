
export const datafromgithub = async () => {
    const repo_url = "https://api.github.com/repos/adeshsinghbits/javaSript-projects/contents"
    let repoContent = await fetch(repo_url).then((res) => res.json());
    
    let data =repoContent.filter((item) => (item.path != "images" ? true : false))
    data = data.filter((item) => ((item.path).match(/[. /]/g) == null? true : false));
    data = data.map((item) => item.name);
    return data;
}
export const imagefromgithub = async () => {
    const repo_url = "https://api.github.com/repos/adeshsinghbits/javaSript-projects/contents/images?ref=main"
    let repoContent = await fetch(repo_url).then((res) => res.json());
    console.log(repo_url);
    
    let data =repoContent.map((item) => item.name);
    console.log(data);
    
    return data;
}
