<script lang="ts">
  import { onMount } from "svelte";
  import { DefinitionManager, FormBuilder } from "@pragmatic-engineering/svelte-form-builder-pro";
  import { BuilderAPI } from "@pragmatic-engineering/svelte-form-builder-pro/lib/API/BuilderAPI";
  import { ThemeMap } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/Misc/Theme";
  import {
    BuilderOptions,
    ChoiceElement,
    Field,
    FormComponents,
    FormComponentsType,
    FormDefinition,
    FormTab,
    onAddChoiceParams,
    views,
  } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/types";
  import { theme } from "./store";
  import { capitalizeFirstLetter } from "../../Utils";

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

  if (!options.componentOptions) {
    options.componentOptions = [];
  }

  if (!options.componentOptions.find((x) => x.componentName == "RichText")) {
    options.componentOptions.push({
      componentName: "RichText",
      customAttribute: {
        conf: {
          branding: false,
        },
      },
    });
  }

  options.builderAPIEvents = {
    onComponentAdded: (field: Field) => {
      if (field.componentName == "Number") {
        let specialNonRenderedConfig = {
          a: "x",
          b: "y",
          c: "z",
        };
        field.customAttribute = JSON.stringify(specialNonRenderedConfig);
      }

      //Add some default choices
      const fieldInfo = DefinitionManager.getFieldComponent(field);
      if (fieldInfo.componentOptions.hasChoices) {
        if (field.componentName == "Checkbox Group" || field.componentName == "Radio Group") {
          field.htmlAttributes.value = [];
        }
        field.choiceConfiguration = {};
        field.choiceConfiguration.choices = [];
        field.choiceConfiguration.choices.push({ label: "Choice-1", value: "choice-1" });
        field.choiceConfiguration.choices.push({ label: "Choice-2", value: "choice-2" });
        field.choiceConfiguration.enableOther = true;
        field.htmlAttributes.required = true;
      }
      console.log(field);
    },
    onComponentDeleted: (field: Field) => {
      console.log(field);
    },
    onRowDeleted: (rowIndex: number) => {
      console.log(rowIndex);
    },
    onComponentPropertiesOpened: (field: Field) => {
      console.log(field);
    },
    onComponentPropertiesClosed: (field: Field) => {
      console.log(field);
    },
    onTabChanged: (definition: FormDefinition) => {
      console.log(definition);
    },
    onTabAdded: (tab: FormTab) => {
      console.log(tab);
    },
    onTabDeleted: (tab: FormTab) => {
      console.log(tab);
    },
    onViewChanged: (view: views) => {
      console.log(view);
    },
    onFormMounted: (definition: FormDefinition) => {
      console.log(`Tab ${definition.tab?.label} mounted`);
    },
    onAddChoice: (choiceParams: onAddChoiceParams, field: Field) => {
      if (field.choiceConfiguration?.choices) {
        const newChoice = generateUniqueChoice(field.choiceConfiguration.choices, 1, "choice");
        choiceParams.choice.label = newChoice.label;
        choiceParams.choice.value = newChoice.value;
      }

      if (field.componentName == "Matrix") {
        const newChoice = generateUniqueChoice(field.customAttribute[choiceParams.customAttribute].choices, 1, choiceParams.customAttribute);
        choiceParams.choice.label = newChoice.label;
        choiceParams.choice.value = newChoice.value;
      }

      function generateUniqueChoice(choices: ChoiceElement[], index: number, prefix: string): ChoiceElement {
        let numItems = choices?.length + index;
        let newChoice: ChoiceElement = {};
        newChoice.label = `${capitalizeFirstLetter(prefix)}-${numItems}`;
        newChoice.value = `${prefix}-${numItems}`;

        while (choices.some((x) => x.value == newChoice.value)) {
          newChoice = generateUniqueChoice(choices, index + 1, prefix);
        }

        return newChoice;
      }
    },
  };

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
