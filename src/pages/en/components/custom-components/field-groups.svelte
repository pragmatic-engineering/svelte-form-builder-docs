<script lang="ts">
  import type { BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-enterprise/Utils/types";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    componentOptions: [
      {
        customImport: import("../../../../components/ExampleTestCustomComponents/Custom2-Address.svelte"),
        componentName: "Address",
        icon: "✉️",
        fieldGroup: [
          {
            fields: [
              {
                componentName: "Text",
                labelAttributes: { label: "Name" },
                htmlAttributes: {},
              },
            ],
          },
          {
            fields: [{ componentName: "Text", htmlAttributes: {}, labelAttributes: { label: "Address" } }],
          },
          {
            fields: [
              { componentName: "Text", htmlAttributes: {}, labelAttributes: { label: "City" } },
              { componentName: "Text", htmlAttributes: {}, labelAttributes: { label: "State" } },
              {
                componentName: "Number",
                htmlAttributes: {},
                labelAttributes: { label: "Zip Code" },
              },
            ],
          },
        ],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['']}" />
