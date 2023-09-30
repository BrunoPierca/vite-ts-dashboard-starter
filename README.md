This project will help you get better results at '¿Como venimos?' type questions from your boss or project manager.

Right now this project is using the following tech:
React
Typescript
Material UI
Axios
React Query
SCSS
Zustand

This project will serve as a base for any and all CRUD Dashboard frontend applications aswell as being the scaffolding for a CLI Tool that will create:

This tool will need these arguments:
   {
      singularName
      PluralName
      ModuleTemplateSourceCode
      ThisStarterProjectSourceCode
   }

And will output:

   --Module:
      -A folder inside './src/pages' called $singularName 
         -A components directory
            -$singularNameModal.tsx
         -A main $singularName.tsx file

      -A file inside './src/services/api' called $singularName.ts 

      -An empty type interface at './src/interfaces/index.ts'

      -A basic store in a file './src/store/$singularName.ts' with get, set, and a couple of actions using Zustand
