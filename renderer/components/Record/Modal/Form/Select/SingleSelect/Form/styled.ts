import styled from 'styled-components';

import Icon from '@app/renderer/components/Icon';

import { COLORS } from '@app/renderer/theme/color';

export const Container = styled.div`
  position: relative;
  width: 296px;
`;

export const SelectButton = styled.button`
  align-items: center;
  border: 1px solid ${COLORS.grayDisabled};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 40px;
  outline: none;
  padding: 7px 8px;
  width: 100%;

  &:focus {
    border: 1px solid ${COLORS.blue};
  }
`;

export const ItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  max-height: 24px;
  overflow: hidden;
`;

export const StyledIcon = styled(Icon)`
  margin-left: 5px;
  min-width: 10px;
`;
