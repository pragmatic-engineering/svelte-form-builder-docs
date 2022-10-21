<script lang="ts">
  import type { BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-pro/Utils/types";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    formDefinition: [
      {
        tab: {
          id: "one",
          tabOrder: 1,
          label: "One",
          dataAttributes: [
            {
              label: "Custom 2",
              name: "custom2",
              value: true,
            },
            {
              label: "Special Configuration",
              name: "custom9",
              isButton: true,
              tab: "Special",
            },
          ],
        },
        rows: [
          {
            rowID: 0,
            fields: [
              {
                componentName: "Table",
                htmlAttributes: {
                  id: "Table-Zk8xIZIX",
                  name: "Table-Zk8xIZIX",
                  value: [
                    {
                      "Column 1": "Josh",
                      "Column 3": true,
                      "Column 4": "choice-1",
                      "Column 5": 1,
                    },
                    {
                      "Column 1": "Bilbo",
                      "Column 4": "choice-2",
                      "Column 5": 5,
                    },
                  ],
                },
                labelAttributes: {
                  label: "Table",
                },
                dataAttributes: [
                  {
                    label: "Theme",
                    tab: "Table",
                    name: "theme",
                    value: "tabulator_site.min.css",
                    options: [
                      {
                        label: "Default",
                        value: "tabulator.min.css",
                      },
                      {
                        label: "Simple",
                        value: "tabulator_simple.min.css",
                      },
                      {
                        label: "Midnight",
                        value: "tabulator_midnight.min.css",
                      },
                      {
                        label: "Tabulator",
                        value: "tabulator_site.min.css",
                      },
                      {
                        label: "Bootstrap 3",
                        value: "tabulator_bootstrap3.min.css",
                      },
                      {
                        label: "Bootstrap 4",
                        value: "tabulator_bootstrap4.min.css",
                      },
                      {
                        label: "Bootstrap 5",
                        value: "tabulator_bootstrap5.min.css",
                      },
                      {
                        label: "Bulma",
                        value: "tabulator_bulma.min.css",
                      },
                      {
                        label: "Materialize",
                        value: "tabulator_materialize.min.css",
                      },
                    ],
                  },
                  {
                    label: "Confirm Column Deletion",
                    tab: "Table",
                    name: "confirmDeleteColumn",
                    value: true,
                  },
                  {
                    label: "Users can Add Rows",
                    tab: "Table",
                    name: "canAddRows",
                    value: true,
                  },
                  {
                    label: "Users can Delete Rows",
                    tab: "Table",
                    name: "canDeleteRows",
                    value: true,
                  },
                  {
                    label: "Allow CSV Export",
                    tab: "Table",
                    name: "canExportCSV",
                    value: false,
                  },
                  {
                    label: "Require a minimum # of Rows",
                    tab: "Table",
                    name: "minRequiredRows",
                    value: 1,
                    valueType: "number",
                  },
                ],
                customAttribute: {
                  tableOptions: {
                    columns: [
                      {
                        title: "Name",
                        field: "Column 1",
                        minWidth: 40,
                        headerWordWrap: false,
                        editable: true,
                        editor: "input",
                        editorParams: {},
                        formatter: "plaintext",
                        formatterParams: {},
                        resizable: true,
                        headerSort: true,
                        validator: [],
                      },
                      {
                        title: "Driver",
                        field: "Column 3",
                        minWidth: 40,
                        headerWordWrap: false,
                        editable: true,
                        editor: "tickCross",
                        editorParams: {},
                        formatter: "tickCross",
                        formatterParams: {},
                        resizable: true,
                        headerSort: true,
                        validator: [],
                      },
                      {
                        title: "Options",
                        field: "Column 4",
                        minWidth: 40,
                        headerWordWrap: false,
                        editable: true,
                        editor: "list",
                        editorParams: {
                          values: [
                            {
                              label: "Choice-1",
                              value: "choice-1",
                            },
                            {
                              label: "Choice-2",
                              value: "choice-2",
                            },
                            {
                              label: "Choice-3",
                              value: "choice-3",
                            },
                          ],
                          autocomplete: true,
                          freetext: false,
                        },
                        formatterParams: {},
                        resizable: true,
                        headerSort: true,
                        validator: [],
                      },
                      {
                        title: "Rating",
                        field: "Column 5",
                        minWidth: 40,
                        headerWordWrap: false,
                        editable: true,
                        editor: "star",
                        editorParams: {},
                        formatter: "star",
                        formatterParams: {},
                        resizable: true,
                        headerSort: true,
                        validator: [],
                      },
                    ],
                  },
                },
                choiceConfiguration: {
                  choices: [
                    {
                      label: "Choice-1",
                      value: "choice-1",
                    },
                    {
                      label: "Choice-2",
                      value: "choice-2",
                    },
                    {
                      label: "Choice-3",
                      value: "choice-3",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" propertyPanelTop="{'0'}" showComponents="{['Table']}" />
