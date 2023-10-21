<script lang="ts">
  import type { BuilderOptions_ as BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-enterprise";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    formDefinition: [
      {
        rows: [
          {
            rowID: 0,
            fields: [
              {
                componentName: "Matrix",
                htmlAttributes: {
                  required: false,
                  class: "",
                  id: "Matrix-rdsGZCQi",
                  name: "Matrix-rdsGZCQi",
                  value: {},
                },
                labelAttributes: {
                  label: "Matrix",
                },
                customAttribute: {
                  rows: {
                    choices: [
                      {
                        label: "Snickers",
                        value: "0",
                      },
                      {
                        label: "Butterfingers",
                        value: "1",
                      },
                      {
                        label: "Baby Ruth",
                        value: "2",
                      },
                    ],
                  },
                  columns: {
                    choices: [
                      {
                        label: "Like",
                        value: "0",
                      },
                      {
                        label: "Indifferent",
                        value: "1",
                      },
                      {
                        label: "Dislike",
                        value: "2",
                      },
                    ],
                  },
                },
                choiceConfiguration: {
                  animation: "smooth",
                  shape: "round",
                },
              },
            ],
          },
        ],
        tab: {
          tabOrder: 1,
          label: "Default",
          id: "default",
        },
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Matrix']}" />
