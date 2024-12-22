
const apikey = import.meta.env.GITHUB_TOKEN
export const datafromgithub = async () => {
    const repo_url = "https://api.github.com/repos/adeshsinghbits/javaSript-projects/contents"
    let repoContent = await fetch(repo_url, {
        "Authorization": `token ${apikey}`,
    "Accept": "application/vnd.github.v3+json",
    }).then((res) => res.json());
    
    let data =repoContent.filter((item) => (item.path != "images" ? true : false))
    data = data.filter((item) => ((item.path).match(/[. /]/g) == null? true : false));
    data = data.map((item) => item.name);
    return data;
}

