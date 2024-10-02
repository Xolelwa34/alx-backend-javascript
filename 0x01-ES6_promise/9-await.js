import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let value = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (func) {
    value = { photo: null, user: null };
  }
  return value;
}
