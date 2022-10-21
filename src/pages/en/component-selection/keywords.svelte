<script lang="ts">
  import type { BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/types";
  import FormBuilderWrapper from "../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    componentOptions: [
      {
        componentName: "Text",
        keywords: ["Hello"],
      },
      {
        componentName: "Audio",
        keywords: ["Music"],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" setComponentSelectionCategory="{''}" />
