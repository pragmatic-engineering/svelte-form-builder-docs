<script lang="ts">
  import type { BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-enterprise/Utils/types";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {};
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Signature']}" />
