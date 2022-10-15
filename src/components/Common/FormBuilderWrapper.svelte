<script lang="ts">
  import { onMount } from "svelte";
  import { FormBuilder } from "svelte-form-builder-community";
  import { ThemeMap } from "svelte-form-builder-community/Utils/Misc/Theme";
  import type { BuilderOptions } from "svelte-form-builder-community/Utils/types";
  import { theme } from "./store";

  export let options: BuilderOptions;

  let show = false;
  $: {
    if ($theme == "dark") {
      options.styling = ThemeMap["Dark"];
      options.styling.root.css.background = "hsl(215deg 28% 17%)";
      options.styling.root.toolButtonBackgroundColor = "#6B6B6B";

      options.styling.header.css.background = "rgb(75 72 72)";
      options.styling.form.cssDragNDropTopBottom.backgroundColor = "rgb(75 72 72)";
      options.styling.tab.activeTabBackgroundColor = "rgb(75 72 72)";
    } else if ($theme == "light") {
      options.styling = ThemeMap["Default"];
    }
    options.styling.form.emptyFormMinHeight = "20vh";

    // options.builderAPIEvents = {
    //   onFormMounted: () => {
    //     show = true;
    //   },
    // };
  }
</script>

{#key options}
  <FormBuilder options="{options}" />
{/key}
