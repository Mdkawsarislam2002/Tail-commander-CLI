import * as p from "@clack/prompts";

const Questions = async () => {
  return await p.group(
    {
      ProjectType: () =>
        p.select({
          message: `What is your project type? ?`,
          options: [
            { value: "vanilla", label: "Vanilla" },
            { value: "react", label: "React.js - vite" },
            { value: "vue", label: "Vue.js - vite" },
            { value: "angular", label: "Angular.js " },
            { value: "svelte", label: "Svelte.js" },
          ],
        }),
      //  adding component LIbrary
      componentLIbrary: () =>
        p.multiselect({
          message: `which components library do you want? ?`,
          options: [
            { value: "flowbit", label: "Flowbit" },
            { value: "daisyUI", label: "Daisy UI " },
            { value: "materialTailwind", label: "material Tailwind" },
          ],
          required: false,
        }),
      //  get css root file path
      cssFilePath: ({ results }) =>
        p.text({
          message: `Provide your root  CSS file path `,
          initialValue:
            results.ProjectType === ("react" || "vue" || "svelte" || "angular")
              ? "./src/index.css"
              : "./",
        }),
    },
    {
      onCancel: ({ errLog }) => {
        p.cancel("Operation cancelled : ", errLog);
        process.exit(0);
      },
    }
  );
};

export default Questions;
