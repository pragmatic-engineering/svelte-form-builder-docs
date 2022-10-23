export const SITE = {
  title: "Documentation",
  description: "Documentation for a No-code Drag n Drop Form Builder for Svelte.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt: "astro logo on a starry expanse of space," + " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<typeof KNOWN_LANGUAGE_CODES[number], Record<string, { text: string; link: string }[]>>;
export const SIDEBAR: Sidebar = {
  en: {
    Introduction: [
      { text: "Introduction", link: "en/intro/docs" },
      { text: "Installation", link: "en/intro/install" },
      { text: "Terminology", link: "en/intro/terminology" },
    ],
    Options: [
      { text: "activeTabOrderValue", link: "en/options/activeTabOrderValue" },
      { text: "allowHtmlLabels", link: "en/options/allowHtmlLabels" },
      { text: "builderAPIEvents", link: "en/options/builderAPIEvents" },
      { text: "componentOptions", link: "en/options/componentOptions" },
      { text: "componentSelectionOptions", link: "en/options/componentSelectionOptions" },
      { text: "confirmRemoveField", link: "en/options/confirmRemoveField" },
      { text: "confirmRemoveTab", link: "en/options/confirmRemoveTab" },
      { text: "customBuildTools", link: "en/options/customBuildTools" },
      { text: "customRenderTools", link: "en/options/customRenderTools" },
      { text: "disableCategories", link: "en/options/disableCategories" },
      { text: "disableComponents", link: "en/options/disableComponents" },
      { text: "disabledBuildTools", link: "en/options/disabledBuildTools" },
      { text: "disabledHtmlAttributes", link: "en/options/disabledHtmlAttributes" },
      { text: "disableDragNDropComponents", link: "en/options/disableDragNDropComponents" },
      { text: "disableDragNDropComponentSelection", link: "en/options/disableDragNDropComponentSelection" },
      { text: "disableDragNDropTabs", link: "en/options/disableDragNDropTabs" },
      { text: "disabledRenderTools", link: "en/options/disabledRenderTools" },
      { text: "disabledViews", link: "en/options/disabledViews" },
      { text: "editOnAdd", link: "en/options/editOnAdd" },
      { text: "enableTabs", link: "en/options/enableTabs" },
      { text: "formDefinition", link: "en/options/formDefinition" },
      { text: "showLabelMaxWidth", link: "en/options/showLabelMaxWidth" },
      { text: "showLabelStyle", link: "en/options/showLabelStyle" },
      { text: "styling", link: "en/options/styling" },
      { text: "tabDataAttributes", link: "en/options/tabDataAttributes" },
      { text: "theme", link: "en/options/theme" },
      { text: "view", link: "en/options/view" },
    ],
    Form: [
      { text: "Tabs", link: "en/form/tabs" },
      { text: "Form Stage", link: "en/form/form-stage" },
    ],
    "Standard Components": [
      { text: "Audio", link: "en/components/standard/Audio" },
      { text: "Button", link: "en/components/standard/Button" },
      { text: "Canvas", link: "en/components/standard/Canvas" },
      { text: "Checkbox Group", link: "en/components/standard/Checkbox Group" },
      { text: "Color", link: "en/components/standard/Color" },
      { text: "DateTime", link: "en/components/standard/DateTime" },
      { text: "Date", link: "en/components/standard/Date" },
      { text: "Divider", link: "en/components/standard/Divider" },
      { text: "File Upload", link: "en/components/standard/File Upload" },
      { text: "Header", link: "en/components/standard/Header" },
      { text: "Hidden", link: "en/components/standard/Hidden" },
      { text: "Link", link: "en/components/standard/Link" },
      { text: "Meter", link: "en/components/standard/Meter" },
      { text: "Month", link: "en/components/standard/Month" },
      { text: "Number", link: "en/components/standard/Number" },
      { text: "Paragraph", link: "en/components/standard/Paragraph" },
      { text: "Password", link: "en/components/standard/Password" },
      { text: "Picture", link: "en/components/standard/Picture" },
      { text: "Progress", link: "en/components/standard/Progress" },
      { text: "Radio Group", link: "en/components/standard/Radio Group" },
      { text: "Range", link: "en/components/standard/Range" },
      { text: "Select", link: "en/components/standard/Select" },
      { text: "Stars", link: "en/components/standard/Stars" },
      { text: "Text", link: "en/components/standard/Text" },
      { text: "Text Area", link: "en/components/standard/Text Area" },
      { text: "Time", link: "en/components/standard/Time" },
      { text: "Video", link: "en/components/standard/Video" },
      { text: "Week", link: "en/components/standard/Week" },
    ],
    "Pro Components": [
      { text: "AutoComplete", link: "en/components/pro/AutoComplete" },
      { text: "Matrix", link: "en/components/pro/Matrix" },
      { text: "Rich Text", link: "en/components/pro/Rich-Text" },
      { text: "Signature", link: "en/components/pro/Signature" },
      { text: "Table", link: "en/components/pro/Table" },
    ],
    "Custom Components": [
      { text: "Custom Components", link: "en/components/custom-components/custom-components" },
      { text: "Custom Definition Validation", link: "en/components/custom-components/definition-validation" },
      { text: "Custom Definition Serialization", link: "en/components/custom-components/definition-serialization" },
      { text: "Custom User Input Validation", link: "en/components/custom-components/user-input-validation" },
      { text: "Custom User Input Serialization", link: "en/components/custom-components/user-input-serialization" },
      { text: "Custom Reset", link: "en/components/custom-components/custom-reset" },
      { text: "Field Groups", link: "en/components/custom-components/field-groups" },
    ],
    "Property Panel": [
      { text: "Help", link: "en/property-panel/help" },
      { text: "Choices", link: "en/property-panel/choices" },
      { text: "Style", link: "en/property-panel/style" },
      { text: "Dynamic HTML Attributes", link: "en/property-panel/htmlAttributes" },
      { text: "Dynamic Data Attributes", link: "en/property-panel/dataAttributes" },
    ],
    "Component Selection": [
      { text: "Categories", link: "en/component-selection/categories" },
      { text: "Filter/Keywords", link: "en/component-selection/keywords" },
      { text: "Starred", link: "en/component-selection/starred" },
      { text: "Menu Tools", link: "en/component-selection/menu" },
    ],
    Tools: [
      { text: "Build Tools", link: "en/tools/build-tools" },
      { text: "Preview Tools", link: "en/tools/preview-tools" },
    ],
    "": [],
  },
};
