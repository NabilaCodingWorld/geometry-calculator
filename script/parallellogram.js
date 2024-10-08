function calculateParallellogramArea() {
  const base = getInputValueById("parallellogram-base");
  const height = getInputValueById("parallellogram-height");
  const area = base * height;
  setInnerTextById("parallellogram-area", area);
}
