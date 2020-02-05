import axios from 'axios';

export const uploadImage = async (image: any) => {
  const formData = new FormData();
  formData.append('image', image);
  const { data: { fileName } } = await axios.post(
    'https://spes-psbxv.run.goorm.io/api/image',
    formData,
  );
  return fileName;
};
