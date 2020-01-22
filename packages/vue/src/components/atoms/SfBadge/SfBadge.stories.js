/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfBadge from "./SfBadge.vue";

storiesOf("Atoms|Badge", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            /* LC Customised CSS modifiers
            "sf-badge--full-width": "sf-badge--full-width",
            "sf-badge--card-sale" : "sf-badge--card-sale",
            "sf-badge--card-new" : "sf-badge--card-new",
            "sf-badge--card-free" : "sf-badge--card-free",
            "sf-badge--card-shade" : "sf-badge--card-shade",
            "sf-badge--small-sale" : "sf-badge--small-sale",
            "sf-badge--small-new" : "sf-badge--small-new",*/
            "color-primary": "color-primary",
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
        default: text("default", "Limited", "Slots")
      }
    },
    components: { SfBadge },
    template: `<SfBadge
      :class="customClass">
      {{customLabel}}
     </SfBadge>`
  }));
