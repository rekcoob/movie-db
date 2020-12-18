import NoImage from '../assets/image-not-found.jpg';

export const getImage = (img: string) => {
	if (img !== 'N/A') {
		return img;
	} else {
		return NoImage;
	}
};
export const noNaValues = (value: string) => {
	if (value !== 'N/A') {
		return value;
	} else {
		return '';
	}
};
