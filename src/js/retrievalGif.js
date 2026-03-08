export { getGifURL };

const API_KEY = "IRSN1V58PygEHtNF5dbjCOMc9soWuEX7";

async function getGifData(term) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${term}`,
    );

    const gifData = await response.json();

    return gifData;
  } catch (error) {
    console.log("Error at getGifData");
    console.log(error);

    return error;
  }
}

function parseGifData(gifData) {
  return gifData.data.images.original.url;
}

async function getGifURL(term) {
  // full pipeline
  try {
    const gifData = await getGifData(term);
    const gifURL = parseGifData(gifData);

    return gifURL;
  } catch (error) {
    console.log("Error at getGifURL");
    console.log(error);
  }
}
