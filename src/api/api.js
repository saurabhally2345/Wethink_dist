import Config from '../utils/config';
import axios from 'axios';


const apiCall = ({
    apiData,
    appUserDetails
});

export default apiCall;


let ses = localStorage.getItem('token');
console.log("ses",ses)


// async function registration(data) {
//     console.log("data",data)
//     console.log("working")

//     var myHeaders = new Headers();
// myHeaders.append("X-API-KEY", "ds89fdfvcb87gf8dfdg87fdghgjh897");
// myHeaders.append("Authorization", "Basic YWRtaW46MTIzNA==");
// myHeaders.append("Content-Type", "application/json");

// //     try {
// //         // axios.defaults.headers.common['authToken'] = localStorage.getItem('token');
// //         let response = await axios.post('http://dksinha.website/eCommerce/eCommerce_API/test/test_registration/', data , 
// //         {
// //             headers: {
// //              'X-API-KEY': 'ds89fdfvcb87gf8dfdg87fdghgjh897',
// //               "Access-Control-Allow-Origin": "*",
// //              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
// //             // 'Authorization': 'Basic  YWRtaW46MTIzNA== ',
// //             'Content-Type':'application/json'

// //         },
        
// //         // proxy: {
// //         //     host:Config.baseURL
// //         // }
// //     }
// //         ,

// //         );
// //         console.log("dataBoy")
// //         console.log("data",JSON.stringify(response.data))
// //         response.status="OK";
// //         return response.status;
// //     }
// //     catch (e) {
// //         console.log("data")
// //         return e;
// //     }
// // }
// var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: data,
//     redirect: 'follow'
//   };
  
//   fetch("http://dksinha.website/eCommerce/eCommerce_API/test/test_registration/", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }   

async function apiData(data,access_token ){

    try{    let quote = data;
        console.log("quote",quote)

           let apiData = await axios.post('https://graph.facebook.com/102845468241991/feed?'
           ,{
               message:quote,
               access_token:"EAAHXzPrfuGEBACFjR8EpYH68xAkTAEnqxmoFFPWSTQeWpCm6B7ZAzLb0NPbRel6tyi3cYrU5MqshpfZAfhCXcbBEeQmJVhz6WrBN1olMABSPKzJ3YPX0dxx3x3XURy6T25Trb22fHLIDEC9itmKQpCcOYULPDsM2HIja8wIvrlNyVbL3WP"
           },
           {
               headers:{
                   'Cookie': 'sb=Rg9iXzgqRarWGvBa7liNm3mg; fr=1cbZwUM2boJ30Tu4Z..BfYg9J.LM.AAA.0.0.BfYj9X.AWWNQZIi'}
           }
            );
            console.log(JSON.stringify(apiData.data));
            
            return apiData;
            
    }
    catch(e)
    {


    return e;
    

}
}

async function appUserDetails(access_token ){

    try{    
        let access_token = access_token;
        console.log(access_token)

           let responseD= await axios.get('https://graph.facebook.com/759849424806195/accounts?'
           ,{

               access_token:"EAAHXzPrfuGEBAKe7JqQwkfCGaxvu89UvQV9InAtjKWarGshkegwTZAPzlQg1rl3fdt7ZCapovcbbDyArDzrkkJWv01ZAwJyHnU26XyqgqZA7W9hJ9GpwwYzf2plJuZA2q3RKTFWhHn9tgAscpO4I7UAB0erIIgosTx6iKZCQkqtAZDZD"
           },
           {
               headers:{
                'Cookie': 'sb=Rg9iXzgqRarWGvBa7liNm3mg; fr=1cbZwUM2boJ30Tu4Z..BfYg9J.LM.AAA.0.0.BfYj9X.AWWNQZIi'}
           }
            );
            console.log(JSON.stringify(responseD.data));
            
            return responseD;
            
    }
    catch(e)
    {
    return e;
    }
}