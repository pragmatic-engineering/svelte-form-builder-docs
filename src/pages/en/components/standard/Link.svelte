<script lang="ts">
  import type { BuilderOptions } from "svelte-form-builder-pro/Utils/types";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    formDefinition: [
      {
        tab: {
          id: "one",
          tabOrder: 1,
          label: "One",
        },
        rows: [
          {
            rowID: 0,
            fields: [
              {
                componentName: "Link",
                htmlAttributes: {
                  href: "https://svelte.dev/",
                  id: "Link-RJ-DCJJU",
                  name: "Svelte JS",
                },
                labelAttributes: {
                  label: "",
                },
                dataAttributes: [
                  {
                    label: "Open Target",
                    name: "target",
                    value: "_blank",
                    options: [
                      {
                        label: "New Tab",
                        value: "_blank",
                      },
                      {
                        label: "Same Tab",
                        value: "_self",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Link']}" />
