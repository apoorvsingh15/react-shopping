import axios from 'axios';
import { Alert } from 'antd';

import { BASE_URL } from './config';

const getSpecificCategoryContent = (category) => {
  console.log(category, "<,===s=d")
  let loading = true;

  return axios.get(`${BASE_URL}/products/category/${category}`)
    .then(function (response) {
      loading = false;
      console.log({ response, loading });
      return { response, loading }
    })
    .catch(function (error) {
      loading = false;
      <Alert message="Error Text" type="error" />
      return { error, loading }
    })
}

export default getSpecificCategoryContent;