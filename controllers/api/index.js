const router = require('express').Router();
const userRoutes = require('./userRoutes');
const axios = require('axios');

async function getOnlineUsersCount(baseUrl) {
    const apiEndpoint = '/api/core/v3/users/online/count';
    const url = `${baseUrl}${apiEndpoint}`;

    try {
        const response = await axios.get(url);
        return response.data.Count || 0;
      } catch (error) {
        console.error(`Failed to get online users count: ${error.message}`);
        return 0;
      }
    }

router.use('/users', userRoutes);

module.exports = router;