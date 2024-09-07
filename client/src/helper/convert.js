/** image onto base64 */


export default function convertToBase64(file) {
  // Create a new Promise that takes two parameters: resolve and reject functions.
  return new Promise((resolve, reject) => {
    // Create a new FileReader object.
    const fileReader = new FileReader();

    // Read the contents of the specified file as  a data URL.
    fileReader.readAsDataURL(file);

    // Set up an event handler for when the file reading is successful.
    fileReader.onload = () => {
      // Call the resolve function with the result (Base64 data URL).
      resolve(fileReader.result);
    }

    // Set up an event handler for when an error occurs during file reading.
    fileReader.onerror = (error) => {
      // Call the reject function with the encountered error.
      reject(error);
    }
  });
} 