<script lang="ts">
  import { onMount } from "svelte";
  import { DefinitionManager, FormBuilder } from "@pragmatic-engineering/svelte-form-builder-enterprise";
  import { BuilderAPI } from "@pragmatic-engineering/svelte-form-builder-enterprise/lib/API/BuilderAPI";
  import { ThemeMap } from "@pragmatic-engineering/svelte-form-builder-enterprise/Utils/Misc/Theme";
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
  } from "@pragmatic-engineering/svelte-form-builder-enterprise/Utils/types";
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
  let showWarning = false;
  let dontShowWarning = localStorage.getItem("dontShowAgain");
</script>

{#if localStorage.getItem("isMobile") === "true" && dontShowWarning !== "true"}
  <h5 style="text-align:center">
    <div style="color:orange;" on:click="{() => (showWarning = !showWarning)}">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cone-striped" viewBox="0 0 16 16">
        <path
          d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"
        ></path>
      </svg>
      {#if showWarning}
        Mobile-Device Detected
      {/if}
    </div>
    {#if showWarning}
      <div class="warning-info">
        <i>Note that rendered forms are fully responsive but the design tools are best done with keyboard & mouse</i>
        <button
          on:click="{() => {
            showWarning = false;
            dontShowWarning = 'true';
            localStorage.setItem('dontShowAgain', 'true');
          }}">Don't Show Again</button
        >
      </div>
    {/if}
  </h5>
{/if}

{#key options}
  <div style:margin-top="{marginTop}">
    <FormBuilder options="{options}" />
  </div>
{/key}

<style>
  .warning-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
  button {
    border: solid;
    /* border-radius: 0px; */
    border-color: #45ba4b;
  }
</style>
