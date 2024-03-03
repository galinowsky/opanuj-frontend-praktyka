import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  console.log(config)
  return config;
});

function logCurrentDateTime() {
  const now = new Date();
  const formattedDateTime = now.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  console.log(formattedDateTime);
}

// Add a response interceptor
axios.interceptors.response.use(function (response, config) {
  // Do something with response data
  console.log(config)
    logCurrentDateTime()
    return response;

});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
