<script lang="ts">
  import type { BuilderOptions } from "svelte-form-builder-pro/Utils/types";
  import FormBuilderWrapper from "../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    componentOptions: [
      {
        componentName: "Text",
        htmlAttributes: { required: true, placeholder: "placeholder", class: "", maxlength: null, spellcheck: true },
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{'Text'}" />
