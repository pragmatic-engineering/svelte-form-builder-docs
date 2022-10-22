<script lang="ts">
  import { onMount } from "svelte";
  import { FormBuilder } from "@pragmatic-engineering/svelte-form-builder-pro";
  import { BuilderAPI } from "@pragmatic-engineering/svelte-form-builder-pro/lib/API/BuilderAPI";
  import { ThemeMap } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/Misc/Theme";
  import { BuilderOptions, FormComponents, FormComponentsType } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/types";
  import { theme } from "./store";

  export let options: BuilderOptions;
  export let showComponents: FormComponentsType[] = [];
  export let setComponentSelectionCategory = "all";
  export let marginTop = "1rem";
  import("tabulator-tables/dist/css/tabulator.min.css");

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

    // options.styling.componentSelection.css = {};
    options.styling.componentSelection.css.minHeight = "15vh";
    // options.styling.componentSelection.css.maxHeight = "40vh";

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

  if (!options.componentOption) {
    options.componentOptions = [
      {
        componentName: "RichText",
        customAttribute: {
          // scriptSrc: "https://cdn.jsdelivr.net/npm/tinymce@6.2.0/tinymce.min.js",
          conf: {
            branding: false,
          },
        },
        customEvents: {
          init: (e: Event, editor: Editor) => {
            document.querySelector(".tox-promotion")?.remove();
          },
        },
      },
    ];
  }

  // if (options.componentOptions) {
  //   options.componentOptions.push({
  //     customImport: import("../../components/ExampleTestCustomComponents/Custom3-Text.svelte"),
  //     componentName: "Text",
  //     htmlAttributes: { class: "" },
  //   });
  // }
</script>

{#key options}
  <div style:margin-top="{marginTop}">
    <FormBuilder options="{options}" />
  </div>
{/key}
