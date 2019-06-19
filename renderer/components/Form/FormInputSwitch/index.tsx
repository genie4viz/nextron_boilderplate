import React, { useCallback } from 'react';
import { FieldRenderProps } from 'react-final-form';

import { KEY_CODES } from '@app/renderer/constants/app';

import { FormattedMessage } from 'react-intl';
import { Circle, CircleContainer, Container, SwitchContainer, Title } from './styled';

export interface ISwitch extends FieldRenderProps<HTMLElement> {
  className?: string;
  isDisabled?: boolean;
  titleId?: string;
  title?: string;
}

const FormInputSwitch: React.FC<ISwitch> = ({
  className,
  isDisabled,
  input: { value, onChange },
  titleId,
  title,
}) => {
  const handleClick = useCallback(() => onChange(!Boolean(value) as any), [value]);

  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.keyCode === KEY_CODES.ENTER && !isDisabled) {
        e.preventDefault();
        onChange(!Boolean(value) as any);
      }
    },
    [value, isDisabled],
  );

  const isActive = Boolean(value);
  return (
    <Container
      className={className}
      isDisabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleOnKeyDown}
    >
      <SwitchContainer>
        <CircleContainer isActive={isActive}>
          <Circle isActive={isActive} />
        </CircleContainer>
      </SwitchContainer>
      {(titleId || title) && (
        <Title isSmall={true}>{titleId ? <FormattedMessage id={titleId} /> : title}</Title>
      )}
    </Container>
  );
};

export default FormInputSwitch;
