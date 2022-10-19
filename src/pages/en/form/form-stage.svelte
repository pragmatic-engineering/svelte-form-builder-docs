<script lang="ts">
  import type { BuilderOptions } from "svelte-form-builder-pro/Utils/types";
  import FormBuilderWrapper from "../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    formDefinition: [
      {
        tab: {
          id: "1",
          tabOrder: 1,
          label: "My Tab",
          dataAttributes: [
            { label: "A Special Flag ", name: "custom2", value: false },
            { label: "A Special Directive", name: "custom1", value: "Hi" },
          ],
        },
        rows: [],
      },
      {
        tab: { id: "2", tabOrder: 2, label: "My Tab 2" },
        rows: [],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" setComponentSelectionCategory="{''}" />
