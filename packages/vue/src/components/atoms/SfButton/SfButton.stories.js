/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfButton from "./SfButton.vue";

storiesOf("Atoms|Button", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            /* LC Customised CSS modifiers
            "sf-button--bg-orange": "sf-button--bg-orange",
            "sf-button--l": "sf-button--l",
            "sf-button--s": "sf-button--s", */
            "sf-button--outline": "sf-button--outline",
            "sf-button--text": "sf-button--text",
            "sf-button--full-width": "sf-button--full-width",
            "color-primary": "colsor-primary",
            "color-secondary": "color-secondary",
            "color-warning": "color-warning",
            "color-danger": "color-danger",
            "color-info": "color-info",
            "color-success": "color-success"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      customLabel: {
        default: text("default", "Shop now", "Slots")
      }
    },
    components: { SfButton },
    template: `<SfButton
      :class="customClass">
      {{customLabel}}
    </SfButton>`
  }));
