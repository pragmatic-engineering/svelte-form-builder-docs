<script lang="ts">
  import { onMount } from "svelte";
  import { FormBuilder } from "svelte-form-builder-pro";
  import { BuilderAPI } from "svelte-form-builder-pro/lib/API/BuilderAPI";
  import { ThemeMap } from "svelte-form-builder-pro/Utils/Misc/Theme";
  import { BuilderOptions, FormComponents, FormComponentsType } from "svelte-form-builder-pro/Utils/types";
  import { theme } from "./store";

  export let options: BuilderOptions;
  export let showComponents: FormComponentsType[] = [];
  export let setComponentSelectionCategory = "all";

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

    options.styling.componentSelection.css = {};
    options.styling.componentSelection.css.minHeight = "15vh";

    options.styling.propertyPanel.propertyPanelTop = 0;

    // options.builderAPIEvents = {
    //   onFormMounted: () => {
    //     show = true;
    //   },
    // };
    if (showComponents.length) {
      options.disableComponents = FormComponents.filter((x) => !showComponents.includes(x));
      BuilderAPI.setComponentSelectionCategory(setComponentSelectionCategory);
    }
  }
</script>

{#key options}
  <FormBuilder options="{options}" />
{/key}
