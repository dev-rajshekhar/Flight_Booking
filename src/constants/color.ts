const ColorWithOpacity = (color, opacity) => {
  let hexOpacity = Math.floor(opacity * 255);
  hexOpacity = hexOpacity.toString(16);
  return `${color}${hexOpacity}`;
};

const colors = {
  background: '#ffffff',
  text: '#333333',
  primary: '#3C4659',
  secondary: 'rgba(60, 70, 89, 0.15)',
  backgroundPrimary: '#FFFFFF',
  negativeButtonColor: '#5988A6',
  selectionCOlor: ColorWithOpacity('#3C4659', 0.15),
  text_02: '#5F5F60',
  text_03: '#9C9D9E',
  background_03: '#8A8BA6',
};

export default colors;
