<script lang="ts">
  import type {
    BuilderOptions_ as BuilderOptions,
    onAddChoiceParams_ as onAddChoiceParams,
    Field_ as Field,
    ChoiceElement_ as ChoiceElement,
  } from "@pragmatic-engineering/svelte-form-builder-enterprise";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";
  import { capitalizeFirstLetter } from "../../../../Utils";

  let options: BuilderOptions = {
    builderAPIEvents: {
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
    },
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Checkbox Group']}" />
