import FocusTrap from 'focus-trap-react';
import noScroll from 'no-scroll';
import React, { Fragment, PureComponent } from 'react';
import ReactDom from 'react-dom';

import { KEY_CODES } from '@app/constants/app';

import { Container, Mask } from './styled';

export interface IModal {
  left?: number;
  top?: number;
  hideMask?: boolean;
  suppressFocusTrap?: boolean;
  isMaskTransparent?: boolean;
  maskColor?: string;
  onClose: () => void;
}

export interface IModalProps extends IModal {
  children: React.ReactElement;
  className?: string;
}

class ModalWrapper extends PureComponent<IModalProps> {
  private containerEl: HTMLElement;
  private rootEl: HTMLElement | null;

  constructor(props: IModalProps) {
    super(props);
    this.rootEl = document.getElementById('root');
    this.containerEl = document.createElement('div');
  }

  public componentDidMount() {
    if (this.rootEl) this.rootEl.appendChild(this.containerEl);
    noScroll.on();
  }

  public componentWillUnmount() {
    if (this.rootEl) this.rootEl.removeChild(this.containerEl);
    noScroll.off();
  }

  public render() {
    const {
      hideMask,
      className,
      children,
      left,
      top,
      maskColor,
      isMaskTransparent,
      onClose,
      suppressFocusTrap,
    } = this.props;

    return ReactDom.createPortal(
      <Fragment>
        {!hideMask && (
          <Mask onMouseDown={onClose} isMaskTransparent={isMaskTransparent} maskColor={maskColor} />
        )}
        <FocusTrap active={!suppressFocusTrap}>
          <Container className={className} left={left} top={top} onKeyDown={this.handleKeyDown}>
            {children}
          </Container>
        </FocusTrap>
      </Fragment>,
      this.containerEl,
    );
  }

  public handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.keyCode) {
      case KEY_CODES.ESC:
        this.props.onClose();
        break;
      default:
        break;
    }
  };
}

export default ModalWrapper;
