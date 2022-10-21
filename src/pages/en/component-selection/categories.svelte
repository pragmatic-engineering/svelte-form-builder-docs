<script lang="ts">
  import type { BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/types";
  import FormBuilderWrapper from "../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    componentOptions: [
      {
        componentName: "Text",
        categories: ["Custom Category"],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" setComponentSelectionCategory="{''}" showComponents="{['Text']}" />
