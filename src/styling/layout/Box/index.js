import styled from 'styled-components';

import align from 'layout/align';
import borders, { borderColor } from 'style/borders';
import colors from 'style/color';
import display from 'layout/display';
import spacing from 'layout/spacing';
import textAlign from 'style/text/align';
import textSize from 'style/text/size';

const Box = styled.div`
  box-sizing: border-box;

  ${align}
  ${borders}
  ${borderColor}
  ${colors}
  ${display}
  ${spacing}
  ${textAlign}
  ${textSize}
`;

export default Box;
