import { baseUrl } from '../settings/api';

const fetchHeroImage = async (setBackgroundImage) => {
  const url = `${baseUrl}/home`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    const image = result.hero_banner.formats.large.url;
    const imageUrl = `${baseUrl}${image}`;
    setBackgroundImage(imageUrl);
  } catch (error) {
    console.log(error);
  }
};

export default fetchHeroImage;
