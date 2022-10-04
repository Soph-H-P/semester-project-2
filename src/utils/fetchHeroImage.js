import loadingSvg from '../assets/icons/loadingSvg.svg';
import { baseUrl } from '../settings/api';

const fetchHeroImage = async (setBackgroundImage) => {
  const url = `${baseUrl}/home`;
  try {
    const response = await fetch(`${url}?populate=*`);
    const result = await response.json();
    const imageUrl = result.data.attributes.hero_banner.data.attributes.url;
    setBackgroundImage(imageUrl);
  } catch (error) {
    setBackgroundImage(loadingSvg);
    console.log(error);
  }
};

export default fetchHeroImage;
