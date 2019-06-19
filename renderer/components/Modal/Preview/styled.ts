import styled, { css } from 'styled-components';

import { COLORS } from '@app/renderer/theme/color';

export const StackModalMixin = css`
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  color: ${COLORS.white};
  position: absolute;
  top: 12px;
  left: 50%;
  max-width: calc(100% - 96px);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
`;

export const Content = styled.div`
  position: absolute;
  outline: none;
  top: 48px;
  bottom: 48px;
  left: 96px;
  right: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IFrame = styled.iframe`
  height: 100%;
  width: 100%;
`;

export const CancelIcon = css`
  color: white;
  position: absolute;
  right: 20px;
  top: 0px;
  width: 48px;
  height: 48px;

  &:hover,
  &:focus,
  &:active {
    color: white;
  }
`;

export const LeftArrow = css`
  position: absolute;
  left: 0px;
  top: 48px;
  bottom: 48px;
  width: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const RightArrow = css`
  position: absolute;
  right: 0px;
  top: 48px;
  bottom: 48px;
  width: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
