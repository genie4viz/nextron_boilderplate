import { observable } from 'mobx';
import React, { createRef } from 'react';

import ButtonIcon from '@app/renderer/components/Button/Icon';
import Dropdown, { IDropdownOption } from '@app/renderer/components/Dropdown';
import { glyphs } from '@app/renderer/components/Icon';

const DROPDOWN_OPTIONS = [
  // {
  //   id: 'option1',
  //   icon: 'EDIT',
  //   titleId: 'dropdown.core.name.editCore',
  // },
  {
    id: 'option2',
    icon: 'DELETE',
    titleId: 'dropdown.core.name.deleteCore',
  },
];

export interface ICoreListNavDropdownButtonProps {
  className?: string;
  coreId: string;
}

class CoreListNavDropdownButton extends React.Component<ICoreListNavDropdownButtonProps> {
  private positionRef: React.RefObject<HTMLInputElement>;

  @observable private isDropdownOpen: boolean = false;

  constructor(props: ICoreListNavDropdownButtonProps) {
    super(props);
    this.positionRef = createRef();
  }

  public render() {
    const { className } = this.props;
    return (
      <div ref={this.positionRef}>
        <ButtonIcon
          className={className}
          onClick={this.handleToggleDropdown}
          iconProps={{ size: { width: 10, height: 10 }, icon: glyphs.ARROW_DROPDOWN }}
        />
        {this.isDropdownOpen && (
          <Dropdown
            css={`
              width: 200px;
            `}
            options={DROPDOWN_OPTIONS}
            onClick={this.handleClickDropdownOption}
            onClose={this.handleToggleDropdown}
            left={
              this.positionRef.current
                ? this.positionRef.current.getBoundingClientRect().left - 43
                : 0
            }
            top={
              this.positionRef.current
                ? this.positionRef.current.getBoundingClientRect().bottom - 20
                : 0
            }
          />
        )}
      </div>
    );
  }

  private handleToggleDropdown = () => {
    this.isDropdownOpen = !this.isDropdownOpen;
  };

  private handleClickDropdownOption = (option: IDropdownOption) => {
    switch (option.id) {
      case 'option1': {
        // tslint:disable-next-line: no-console
        console.log(option.id);
        break;
      }
      case 'option2': {
        // this.props.coresRootStore.removeCore(this.props.coreId);
        console.log('Removing core');
        break;
      }
      default:
        break;
    }
    this.handleToggleDropdown();
  };
}

export default CoreListNavDropdownButton;
