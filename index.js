function torrent()
{
    fetch("https://torrentsearch.vercel.app/Avatar")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp)
    })
}
 

torrent()