import { rems } from 'style-utils/units';
import { createColorModifiers } from 'style/color';
import createBreakpointModifiers from 'style-utils/modifiers';

const borderValTransform = (val, { colors, basePixels }) => {
  if (isNaN(parseInt(val, 10))) {
    return val;
  }

  const [
    borderWidth,
    borderStyle,
    borderColor,
  ] = val.split(' ');
  const mappedColor = colors[borderColor] || borderColor;
  const parsedWidth = /px/g.test(borderWidth) ? parseInt(borderWidth, 10) : borderWidth;
  const widthThreshold = typeof parsedWidth === 'number' && parsedWidth > 3 ? rems(parsedWidth, basePixels) : borderWidth;

  return `${widthThreshold} ${borderStyle} ${mappedColor}`;
}

const borders = createBreakpointModifiers([
  {
    cssProp: 'border',
    propName: 'border',
    valTransform: borderValTransform,
  },
  {
    cssProp: 'border-top',
    propName: 'borderTop',
    valTransform: borderValTransform,
  },
  {
    cssProp: 'border-right',
    propName: 'borderRight',
    valTransform: borderValTransform,
  },
  {
    cssProp: 'border-bottom',
    propName: 'borderBottom',
    valTransform: borderValTransform,
  },
  {
    cssProp: 'border-left',
    propName: 'borderLeft',
    valTransform: borderValTransform,
  },
  
]);

const borderColorValTransform = (val, { colors }) => (colors[val] || val);

export const borderColor = createBreakpointModifiers([
  {
    cssProp: 'border-color',
    propName: 'borderColor',
    valTransform: borderColorValTransform,
  },
  {
    cssProp: 'border-top-color',
    propName: 'borderTopColor',
    valTransform: borderColorValTransform,
  },
  {
    cssProp: 'border-right-color',
    propName: 'borderRightColor',
    valTransform: borderColorValTransform,
  },
  {
    cssProp: 'border-bottom-color',
    propName: 'borderBottomColor',
    valTransform: borderColorValTransform,
  },
  {
    cssProp: 'border-left-color',
    propName: 'borderLeftColor',
    valTransform: borderColorValTransform,
  }
])

export default borders;
