document.addEventListener("DOMContentLoaded", () => {
    let photosDiv=document.getElementById("photos");
    let searchInput=document.querySelector("#searchInput")
    document.getElementById("search").addEventListener("click",(e)=>{
        photosDiv.innerHTML="";
        e.preventDefault();
        const value=searchInput.value.trim();
        fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
            method : "GET",
            headers : {
                Authorization :"Client-ID Cl23clgP4epchdWK0IaXKjKEVVcvkhThFCkKyKZDr7s"
            }
        })
        .then(res=>res.json())
        .then(data=>{
           data.results.forEach(result => {
            const imgElement = document.createElement("img");
            imgElement.src = result.urls.regular;
            imgElement.alt = result.alt_description;
            imgElement.style.width="24%";
            imgElement.style.margin="35px";
            imgElement.style.border="2px solid black";
            imgElement.style.padding="15px";
            imgElement.style.borderRadius="20px"
            photosDiv.appendChild(imgElement);
           });
        })
        .catch(err=>console.log(err));

    })
    document.getElementById("clear").addEventListener("click",(e)=>{
        e.preventDefault();
        photosDiv.innerHTML="";
        searchInput.value="";
        
    })
})