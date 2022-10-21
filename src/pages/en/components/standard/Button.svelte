<script lang="ts">
  import type { BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/types";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    formDefinition: [],
    componentOptions: [
      {
        componentName: "Button",
        events: {
          onclick: (e: Event) => {
            alert(`Hello from ${e.target.id}`);
          },
        },
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Button']}" />
