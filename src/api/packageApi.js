export const packageCreatedPromise = email=>{
    return fetch(`http://localhost:3000/packages?email=${email}`)
    .then(res=> res.json())
}