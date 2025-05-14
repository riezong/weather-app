export default function GIPHY(weatherConditions) {
  // GIPHY
  const img = document.querySelector("img");

  async function getGif() {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=mc5mG0JWFoAUnogxO2r7DcxFqyyhm3Yu&s=" +
        weatherConditions,
      { mode: "cors" },
    );
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  }
  getGif();
}
