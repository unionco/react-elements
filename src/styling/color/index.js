import _get from 'lodash/get';
import _isPlainObject from 'lodash/isPlainObject';
import _reduce from 'lodash/reduce';
import _upperFirst from 'lodash/upperFirst';

import baseSettings from 'style/settings';

const colorMods = [
  {
    cssProp: 'color',
    propName: 'color',
  },
  {
    cssProp: 'background-color',
    propName: 'bgColor',
  },
];

export const createColorData = (data = {}, colorCatName = '') => {
  return _reduce(data, (allData, hex, name) => {
    const colorName = colorCatName.length ? _upperFirst(name) : name;
    const colorDataName = `${colorCatName}${colorName}`;

    if (typeof (hex) === 'string') {
      allData[colorDataName] = hex;
    } else if (_isPlainObject(hex)) {
      allData = {
        ...allData,
        ...createColorData(hex, colorDataName)
      }
    }

    return allData;
  }, {});
};


export const createColorModifiers = (colorModifiers = []) => ({ theme, ...props }) => {
  const colors = _get(theme, 'colors') || _get(baseSettings, 'colors', {});

  return colorModifiers.reduce((allColors, { propName, cssProp }) => {
    const colorName = props[propName];
    const validColor = colors[colorName];

    if (validColor) {
      allColors += `${cssProp}: ${validColor};\n`;
    }

    return allColors;
  }, '');
};

const colors = createColorModifiers(colorMods);

export default colors;
