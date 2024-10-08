function calculateTriangleArea() {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");
  const area = 0.5 * base * height;
  setInnerTextById("triangle-area", area);
}
