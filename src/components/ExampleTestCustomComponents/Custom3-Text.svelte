<script lang="ts">
  import { ComponentLabel, convertDataAttributes, GroupSlot } from "@pragmatic-engineering/svelte-form-builder-enterprise";
  import type { ComponentOptions, Field, FormTab, ValidationResult } from "@pragmatic-engineering/svelte-form-builder-enterprise/Utils/types";
  export let componentOptions: ComponentOptions;
  export let field: Field;
  export let tab: FormTab;

  export function validateDefinition(): ValidationResult {
    if (!field.htmlAttributes.class?.includes("form-group")) {
      return {
        field,
        errors: [`(Tab ${tab?.label}) ${field.labelAttributes?.label} must contain a 'form-group' Class`],
      };
    }
  }

  export function validateUserInput(): ValidationResult {
    if (field.htmlAttributes.value != "valid") {
      return { field: field, errors: [`${field.labelAttributes?.label} is not valid...`] };
    }
  }
</script>

<GroupSlot>
  <ComponentLabel field="{field}" />
  Custom Text
  <input {...field.htmlAttributes} {...convertDataAttributes(field.dataAttributes)} type="text" bind:value="{field.htmlAttributes.value}" />
</GroupSlot>
