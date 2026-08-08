// let btn = document.querySelector("button");

// btn.addEventListener("click",async () => {
//     let fact = await getFacts();
//     console.log(fact);
// });

let url = "https://icanhazdadjoke.com/";
async function getFacts(){
    try{
        const config = { headers: {Accept: "application/json"} };
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch(e){
        console.log("Error - ", e);
    }
}