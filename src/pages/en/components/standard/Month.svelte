<script lang="ts">
  import type { BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/types";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    formDefinition: [],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Month']}" />
