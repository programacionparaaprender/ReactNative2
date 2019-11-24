import axios from 'axios';
var userService = {
    getUsers: async function(){
        return axios.get('https://randomuser.me/api/',{
            params:{
                results:5000
            }
        });
    }
};
export { userService as default };
    // Make a request for a user with a given ID
/*     await axios.get('https://randomuser.me/api/')
    //await axios.get('https://www.reddit.com/r/politics.json')
    .then((response) => {
      const data  = response.data;
      
      //return response.json();
  })
  .then(({ data }) => {
      
      
  })
  .catch(function (error) {
      console.log(error);
  })
  .finally(function () {
      // always executed
  }); */  