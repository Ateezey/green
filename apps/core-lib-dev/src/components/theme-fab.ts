import { LitElement, nothing } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'
import '@sebgroup/green-core/components/icon/icons/rocket.js'
import '@sebgroup/green-core/components/icon/icons/arrow-rotate-right-left.js'
import '@sebgroup/green-core/components/icon/icons/credit-card.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/fab/index.js'

@customElement('tp-fab')
export class GdsThemeFab extends LitElement {
  @state()
  isModalOpen = false

  private closeModal() {
    if (this.isModalOpen) {
      setTimeout(() => {
        this.isModalOpen = false
      }, 50)
    }
  }
  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('click', () => {
      console.log('asd')
      this.isModalOpen = true
    })
  }

  render() {
    return html`
      <style>
        tp-fab {
          z-index: 1050;
        }
      </style>
      <gds-flex z-index="1050">
        <gds-fab inset="80% 47.5%">+</gds-fab>
      </gds-flex>
      ${this.isModalOpen
        ? html`
            <style>
              .actionsheet {
                backdrop-filter: blur(25px);
              }
              .actionsheet {
                @starting-style {
                  opacity: 0;
                  transform: translateX(100%);
                }

                @media screen and (max-width: 768px) {
                  @starting-style {
                    transform: translateY(100%);
                  }
                }
              }
            </style>
            <gds-flex
              position="fixed"
              inset="0"
              background="#00000040"
              z-index="20"
              align-items="flex-end"
              flex-direction="row; m{column}"
            >
              <gds-container
                width="100%; m{25vw}"
                background="#FFFFFF/0.8"
                level="2"
                height="100vh; m{100%}"
                transition="all 0.2s"
                class="actionsheet"
                ><gds-flex gap="5xl" flex-direction="column">
                  <gds-flex
                    padding="5xl l"
                    width="100%"
                    justify-content="flex-end"
                  >
                    <gds-button rank="secondary" @click=${this.closeModal}>
                      <gds-icon-cross-small></gds-icon-cross-small>
                    </gds-button>
                  </gds-flex>
                  <gds-flex
                    flex-direction="column"
                    justify-content="center"
                    align-items="center"
                    padding="l"
                    gap="l"
                    place-items="baseline"
                  >
                    <gds-button rank="tertiary">
                      <gds-icon-arrow-rotate-right-left
                        slot="lead"
                      ></gds-icon-arrow-rotate-right-left>
                      Flytta pengar</gds-button
                    ><gds-button rank="tertiary">
                      <gds-flex
                        border-radius="25px"
                        background="#fff"
                        slot="lead"
                        ><gds-icon-credit-card></gds-icon-credit-card
                      ></gds-flex>
                      Hantera kort</gds-button
                    ><gds-button rank="tertiary">
                      <gds-icon-rocket slot="lead"></gds-icon-rocket>
                      Action three</gds-button
                    >
                  </gds-flex> </gds-flex
                ><!--wrap-->
              </gds-container>
            </gds-flex>
          `
        : nothing}
    `
  }
}
