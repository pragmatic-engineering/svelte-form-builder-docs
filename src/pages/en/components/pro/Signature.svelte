<script lang="ts">
  import type { BuilderOptions } from "svelte-form-builder-pro/Utils/types";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {};
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Signature']}" />
