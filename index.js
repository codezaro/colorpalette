const generateBtnEl = document.getElementById("generate_btn");

const hexColorGenerator = () => {
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";
  let counter = 6;
  while (counter--) {
    let random = Math.floor(Math.random() * hex.length);
    hexColor += hex[random];
  }
  return hexColor;
};

const colorPaletteGenerator = () => {
  const colorPalette = [];

  for (let i = 0; i < 4; i++) {
    colorPalette.push(hexColorGenerator());
  }

  return colorPalette;
};

const generateColors = () => {
  const colorsContainer = document.querySelector(".colors_container");
  colorsContainer.innerHTML = "";
  const colorPalette = colorPaletteGenerator();

  colorPalette.forEach((color, i) => {
    const colorDiv = document.createElement("div");
    colorDiv.id = `color${i + 1}`;
    colorDiv.className = "colorBox";
    colorDiv.style.background = color;

    const colorTag = document.createElement("p");
    colorTag.innerHTML = color;
    colorTag.id = `color${i + 1}Tag`;
    colorTag.className = "colorTag";
    colorDiv.appendChild(colorTag);
    colorsContainer.appendChild(colorDiv);
  });

  const copyToClipboard = (id) => {
    const el = document.getElementById(id);
    navigator.clipboard
      .writeText(el.innerText)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch(() => {
        alert("Could not copy");
      });
  };

  const colorTags = document.querySelectorAll(".colorTag");
  colorTags.forEach((colorTag, i) => {
    colorTag.addEventListener("click", () =>
      copyToClipboard(`color${i + 1}Tag`)
    );
  });
};
generateBtnEl.addEventListener("click", generateColors);
generateColors();
