import axios from 'axios';
const URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '30842205-cd6932c3783f22601a373589f';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
export const PER_PAGE = 12;

// axios.defaults.baseURL = 'https://pixabay.com/api/';

export const searchImage = async (query, page) => {
  try {
    const searchParams = new URLSearchParams({
      key: PIXABAY_API_KEY,
      image_type: IMAGE_TYPE,
      orientation: ORIENTATION,
      safesearch: SAFESEARCH,
      per_page: PER_PAGE,
      page: page,
      q: query,
    });

    const url = `${URL}?${searchParams}`;
    const response = await axios.get(url);
    if (!response.status) {
      throw new Error('Something goes wrong');
    }

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
