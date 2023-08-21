const imageByIndex = (
  index,
  images
) => images[index % images.length];

export default imageByIndex;