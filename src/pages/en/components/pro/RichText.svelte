<script lang="ts">
  import type { BuilderOptions_ as BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-enterprise";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    formDefinition: [],
    componentOptions: [
      {
        componentName: "RichText",
        customAttribute: {
          // scriptSrc: "https://cdn.jsdelivr.net/npm/tinymce@6.2.0/tinymce.min.js",
          conf: {
            branding: false,
          },
        },
        customEvents: {
          init: (e: Event, editor) => {},
        },
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['RichText']}" />
