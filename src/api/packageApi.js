export const packageCreatedPromise = (email,accessToken)=>{
    return fetch(`https://package-booking-server.vercel.app/packages/myPackages?email=${email}`,{
        headers:{
             authorization: `Bearer ${accessToken}`
        } 
    })
    .then(res=> res.json())
}