<script lang="ts">
  import type { BuilderOptions_ as BuilderOptions } from "@pragmatic-engineering/svelte-form-builder-enterprise";
  import FormBuilderWrapper from "../../../../components/Common/FormBuilderWrapper.svelte";

  let options: BuilderOptions = {
    formDefinition: [
      {
        tab: {
          id: "one",
          tabOrder: 1,
          label: "One",
        },
        rows: [
          {
            rowID: 3,
            fields: [
              {
                componentName: "Paragraph",
                htmlAttributes: {
                  id: "Paragraph-0xxaAo0z",
                  name: "Paragraph-0xxaAo0z",
                  value:
                    '<h3 style="box-sizing: border-box; font-family: Montserrat, sans-serif; font-weight: 400; line-height: 34px; color: rgb(68, 68, 68); margin: 0px 0px 20px; font-size: 30px; background-color: rgb(255, 255, 255);"><span style="box-sizing: border-box; font-weight: 700;">What does the future hold?</span></h3><p style="box-sizing: border-box; margin: 0px 0px 15px; font-size: 16px; line-height: 28px; font-family: Montserrat, sans-serif; background-color: rgb(255, 255, 255);">The future of web development looks to be low-code and no-code development and Gartner suggests that “by 2024, low-code application development will be responsible for more than 65% of application development activity”.&nbsp;</p><p style="box-sizing: border-box; margin: 0px 0px 15px; font-size: 16px; line-height: 28px; font-family: Montserrat, sans-serif; background-color: rgb(255, 255, 255);">Software applications are being created to serve those without a technical coding background, such as citizen developers/integrators. According to&nbsp;<a href="https://www.techrepublic.com/article/report-60-of-apps-are-built-outside-of-it-and-thats-a-good-thing/" target="_blank" rel="noreferrer noopener nofollow" style="box-sizing: border-box; background-color: transparent; color: rgb(234, 53, 86); text-decoration-line: none; font-weight: 700;">TechRepublic</a>, “nearly 60% of all custom apps are now built outside the IT department. Of those, 30% are built by employees with either limited or no technical development skills”. This is to help organisations reduce backlog, decrease costs, improve agility, and create low-code automation.</p>',
                },
                labelAttributes: {
                  label: "",
                },
                dataAttributes: [],
                defaultValue:
                  '<h3 style="box-sizing: border-box; font-family: Montserrat, sans-serif; font-weight: 400; line-height: 34px; color: rgb(68, 68, 68); margin: 0px 0px 20px; font-size: 30px; background-color: rgb(255, 255, 255);"><span style="box-sizing: border-box; font-weight: 700;">What does the future hold?</span></h3><p style="box-sizing: border-box; margin: 0px 0px 15px; font-size: 16px; line-height: 28px; font-family: Montserrat, sans-serif; background-color: rgb(255, 255, 255);">The future of web development looks to be low-code and no-code development and Gartner suggests that “by 2024, low-code application development will be responsible for more than 65% of application development activity”.&nbsp;</p><p style="box-sizing: border-box; margin: 0px 0px 15px; font-size: 16px; line-height: 28px; font-family: Montserrat, sans-serif; background-color: rgb(255, 255, 255);">Software applications are being created to serve those without a technical coding background, such as citizen developers/integrators. According to&nbsp;<a href="https://www.techrepublic.com/article/report-60-of-apps-are-built-outside-of-it-and-thats-a-good-thing/" target="_blank" rel="noreferrer noopener nofollow" style="box-sizing: border-box; background-color: transparent; color: rgb(234, 53, 86); text-decoration-line: none; font-weight: 700;">TechRepublic</a>, “nearly 60% of all custom apps are now built outside the IT department. Of those, 30% are built by employees with either limited or no technical development skills”. This is to help organisations reduce backlog, decrease costs, improve agility, and create low-code automation.</p>',
              },
            ],
          },
        ],
      },
    ],
  };
</script>

<FormBuilderWrapper options="{options}" showComponents="{['Paragraph']}" />
