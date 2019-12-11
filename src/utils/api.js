import axios from 'axios';

const addAuthorizationHeader = (axiosParameters) => {
  const token = JSON.parse(localStorage.getItem('token'));

  if (token) {
    axiosParameters['headers'] = { Authorization: `Bearer_${token}` };
  }

  return axiosParameters;
};

const GET = (url) => {
  const axiosParameters = {
    method: 'get',
    url
  };

  addAuthorizationHeader(axiosParameters);

  return axios(axiosParameters);
};

const POST = (url, data) => {
  const axiosParameters = {
    method: 'post',
    url,
    data
  };

  addAuthorizationHeader(axiosParameters);

  return axios(axiosParameters);
};

const DELETE = (url) => {
  const axiosParameters = {
    method: 'delete',
    url
  };

  addAuthorizationHeader(axiosParameters);

  return axios(axiosParameters);
};

export const api = {
  GET,
  POST,
  DELETE
};
