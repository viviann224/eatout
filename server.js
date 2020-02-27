require("dotenv").config();
const axios = require('axios');

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.yelp.com/v3/businesses/search?location=Houston",
//   "method": "GET",
//   "headers": {
//     "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
//     "User-Agent": "PostmanRuntime/7.15.0",
//     "Accept": "*/*",
//     "Cache-Control": "no-cache",
//     "Postman-Token": "0d161af6-b14e-4bfd-8857-c44fc510c0e2,2a1f966d-769f-48e8-b4a0-fddc7f424a2e",
//     "Host": "api.yelp.com",
//     "accept-encoding": "gzip, deflate",
//     "Connection": "keep-alive",
//     "cache-control": "no-cache"
//   }
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

console.log(`http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=${process.env.WEATHER_API_KEY}&units=imperial`);

axios.get(`https://api.yelp.com/v3/businesses/search`,
{
	headers: {
    		Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
 		},
 		params: {
 			location: `Houston`,

 		}
 }
	)
.then((res) => {
 console.log(res.data.businesses)
})
.catch((err) => {
 console.log ('error')
})

// axios.get('https://api.yelp.com/v3/businesses/search',
// 	{
// 		headers: 
// 		{
//     		Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
//  		}
// 	})
//   .then(function (response) 
//   {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log("error");
//   })
//   .finally(function () {
//     // always executed
//   });
// headers: {
//    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
// }

// axios.get(`https://api.yelp.com/v3/businesses/search`, {
//     headers: {
//         Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
//    },
// })

// axios.get(`https://api.yelp.com/v3/businesses/search`, {
//    headers: {
//      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
// },
//    params: {
//      location: {locationSearched},
//      categories: 'breakfast_brunch',
// }
// .then((res) => {
//  console.log(res)
// })
// .catch((err) => {
//  console.log ('error')
// })
// axios.get(`https://api.yelp.com/v3/businesses/search`, 
// {
//    headers: {
//      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
//  }
// }
// .then((res) => {
//  console.log(res)
// })
// .catch((err) => {
//  console.log ('error')
// })

// let locationSearched="texas";
// axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
//   headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
// },
//   params: {
//   categories: 'breakfast_brunch',
// }
// })
// .then((res) => {
// console.log(res)
// })
// .catch((err) => {
// console.log ('error')
// })