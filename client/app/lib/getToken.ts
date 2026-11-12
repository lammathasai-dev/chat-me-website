async function GetToken (){
    const token = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("token="));
    if(!token) return null ;
    return token.split("=")[1] || null ;
}

export default GetToken ; 