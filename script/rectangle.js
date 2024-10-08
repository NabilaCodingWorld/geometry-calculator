function calculateRectangleArea() {
  const base = getInputValueById("rectangle-base");
  const height = getInputValueById("rectangle-height");
  const area = base * height;
  setInnerTextById("rectangle-area", area);
}
