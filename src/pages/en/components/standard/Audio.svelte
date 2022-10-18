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
            rowID: 1,
            fields: [
              {
                componentName: "Audio",
                htmlAttributes: { src: "https://sveltejs.github.io/assets/music/strauss.mp3" },
              },
            ],
          },
        ],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Audio']}" />
