/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICHorizAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Avatar } from '../../avatar/base/example';
import { StandardIcon } from '../../icons/standard/example';
import { ComboboxContainer, Listbox, ListboxItem, EntityOption }
  from '../base/example';
import { ListboxPill }
  from '../../pills/listbox-of-pill-options/example';
import SvgIcon from '../../../shared/svg-icon';

const listboxSelectionsId = 'listbox-selections-unique-id';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

const ListboxDropdown = props =>
  <Listbox className="slds-dropdown slds-dropdown--fluid" vertical>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId01}
        entityTitle="Acme"
        entityMeta
        focused={props.focused}
      />
    </ListboxItem>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId02}
        entityTitle="Salesforce.com, Inc."
        entityMeta
      />
    </ListboxItem>
  </Listbox>;

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          containerClassName="slds-has-input-focus"
          inputIcon="right"
          inputIconRightSymbol="search"
          selectedOptionsInline
          autocomplete
          isOpen
          listbox={<ListboxDropdown />}
        />
      </div>,
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          inputIcon="right"
          inputIconRightSymbol="search"
          selectedOptionsInline
          autocomplete
          isOpen
          listbox={<ListboxDropdown focused />}
          aria-activedescendant={listboxOptionId01}
        />
      </div>
  },
  {
    id: 'options-selected',
    label: 'Option(s) Selected',
    element:
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        selectedOptionsInline
        autocomplete
      >
        <Listbox aria-label="Selected Options:" inline>
          <ListboxItem>
            <ListboxPill label="Acme" tabIndex="0">
              <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                <StandardIcon />
              </Avatar>
            </ListboxPill>
          </ListboxItem>
          <ListboxItem>
            <ListboxPill label="Salesforce.com, Inc.">
              <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                <StandardIcon />
              </Avatar>
            </ListboxPill>
          </ListboxItem>
        </Listbox>
      </ComboboxContainer>
  },
  {
    id: 'focused-options-selected',
    label: 'Focused - Option(s) Selected',
    element:
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen
          inputIcon="right"
          inputIconRightSymbol="search"
          containerClassName="slds-has-input-focus"
          selectedOptionsInline
          autocomplete
          listbox={<ListboxDropdown />}
        >
          <Listbox
            id={listboxSelectionsId}
            aria-label="Selected Options:"
            inline
          >
            <ListboxItem>
              <ListboxPill label="Acme" tabIndex="0">
                <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                  <StandardIcon />
                </Avatar>
              </ListboxPill>
            </ListboxItem>
            <ListboxItem>
              <ListboxPill label="Salesforce.com, Inc.">
                <Avatar className="slds-avatar--x-small slds-pill__icon_container">
                  <StandardIcon />
                </Avatar>
              </ListboxPill>
            </ListboxItem>
          </Listbox>
        </ComboboxContainer>
      </div>,
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  }
];
