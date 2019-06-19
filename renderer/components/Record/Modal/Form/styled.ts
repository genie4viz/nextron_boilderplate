import styled from 'styled-components';

import { COLORS } from '@app/renderer/theme/color';

import FieldDropdownButton from '@app/renderer/components/Field/DropdownButton';
import Icon from '@app/renderer/components/Icon';

export const ColumnContainer = styled.div<{ removeMarginBottom?: boolean }>`
  margin-bottom: ${(props) => (props.removeMarginBottom ? '0px' : '35px')};
`;

export const TopContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 10px;
`;

export const ColumnIcon = styled(Icon)`
  color: ${COLORS.grayText};
  margin-right: 8px;
`;

export const ColumnTitle = styled.div`
  color: ${COLORS.grayText};
  font-size: 12px;
  margin-right: 5px;
`;

export const DropdownIcon = styled(FieldDropdownButton)`
  height: 20px;
  width: 20px;
`;
