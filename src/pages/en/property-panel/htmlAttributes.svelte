<script lang="ts">
  import type { BuilderOptions_ as BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-enterprise";
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
