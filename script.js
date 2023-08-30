const search = () =>{
    const searchBox = document.getElementById("search-item").value.toLowerCase();
    const codeCardList = document.getElementById("code-card-list")
    const codeCard = document.querySelectorAll(".codeCard")
    const codeCardYT = document.querySelectorAll(".cardYT")
    const codeCardCom = document.querySelectorAll(".cardCompany")
    const codeCardType = document.querySelectorAll(".cardType")
    const codeName = document.getElementsByTagName("p")

    

    for(var i=0; i< codeName.lenght; i++){
        let match = codeCardYT[i].getElementsByTagName("p")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toLowerCase().indexOf(searchBox) > -1){
                codeCardYT[i].stylesheetFYCCode.display = "";
            }
            else{
                codeCardYT[i].stylesheetFYCCode.display = "none";
            }
        }
    }
}