<script lang="ts">
  import type { ComponentOptions_ as ComponentOptions, Field_ as Field, FormTab_ as FormTab } from "@pragmatic-engineering/svelte-form-builder-enterprise";
  export let componentOptions: ComponentOptions;
  export let field: Field;
  export let tab: FormTab;
</script>

<h4>Custom Component 1</h4>

<marquee>This text will scroll from right to left</marquee>

<marquee direction="down" width="250" height="200" behavior="alternate" style="border:solid">
  <marquee behavior="alternate"> This text will bounce </marquee>
</marquee>
