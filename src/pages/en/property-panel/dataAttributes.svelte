<script lang="ts">
  import type { BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/types";
  import FormBuilderWrapper from "../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    componentOptions: [
      {
        componentName: "Text",
        htmlAttributes: { required: true, placeholder: "placeholder", class: "", maxlength: null, spellcheck: true },
        dataAttributes: [
          { label: "Number field", name: "numfield", valueType: "number" },

          { label: "Custom 1", name: "custom1", value: "hi" },
          { label: "Custom 2", name: "custom2", value: true },
          { label: "Custom 3", name: "custom3", value: true },
          { label: "Custom 4", name: "custom4", value: [1, 2, 3] },
          { label: "Custom 5", name: "custom5", value: { a: "1", b: "2", c: ["a"] } },
          { name: "HiddenWithoutLabel", value: false },
          {
            label: "Custom Options",
            tab: "Custom Options",
            name: "custom7",
            options: [
              { label: "Red", value: "option-red" },
              { label: "Green", value: "option-green" },
              { label: "Blue", value: "option-blue" },
            ],
            multiple: true,
          },
          { label: "Newly added on component definition", name: "custom8", value: false },
          {
            label: "Special Configuration",
            name: "custom9",
            isButton: true,
            tab: "Special",
            buttonHandler: async (e, dataAttribute) => {
              alert("hi");
            },
          },
        ],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{'Text'}" />
