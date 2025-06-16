export const packageCreatedPromise = (email,accessToken)=>{
    return fetch(`http://localhost:3000/packages/myPackages?email=${email}`,{
        headers:{
             authorization: `Bearer ${accessToken}`
        } 
    })
    .then(res=> res.json())
}