// Function for get color random
export const getRandomColor = (running) => {
  // 16777215 is total combination of RGB(255,255,255)
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  if (running) {
    return `#${randomColor}`;
  }

  return "#000";
};
