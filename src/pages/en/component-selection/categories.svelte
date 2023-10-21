<script lang="ts">
  import type { BuilderOptions_ as BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-enterprise";
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
