<script lang="ts">
  import type { BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-enterprise/Utils/types";
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
                componentName: "Video",
                htmlAttributes: {
                  src: "https://sveltejs.github.io/assets/caminandes-llamigos.mp4",
                  poster: "https://sveltejs.github.io/assets/caminandes-llamigos.jpg",
                  width: 500,
                },
              },
            ],
          },
        ],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Video']}" />
