<script lang="ts">
  import type { BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/types";
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
                componentName: "Picture",
                htmlAttributes: {
                  srcset: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/painted-hand-298-332.jpg",
                  media: "",
                  id: "Picture-Mp8RcKTM",
                  name: "Picture-Mp8RcKTM",
                },
                labelAttributes: {
                  label: "Picture",
                },
                dataAttributes: [],
                tooltipAttributes: {
                  text: "",
                  position: "right",
                  size: "large",
                },
              },
            ],
          },
        ],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Picture']}" />
