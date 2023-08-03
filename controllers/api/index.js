const router = require('express').Router();
const userRoutes = require('./user-routes');
<<<<<<< HEAD
// const axios = require('axios');
=======
const axios = require('axios');
>>>>>>> dfeec45930f17dd30cf4adf1ddeea95dc091f8a5

// async function getOnlineUsersCount(baseUrl) {
//     const apiEndpoint = '/api/core/v3/users/online/count';
//     const url = `${baseUrl}${apiEndpoint}`;

//     try {
//         const response = await axios.get(url);
//         return response.data.Count || 0;
//       } catch (error) {
//         console.error(`Failed to get online users count: ${error.message}`);
//         return 0;
//       }
//     }

//     $("#currentHour").text(dayjs().format("HH:mm:ss a"))
//     $("#currentDay").text(dayjs().format("MMM DD, YYYY"))
    
router.use('/users', userRoutes);

module.exports = router;