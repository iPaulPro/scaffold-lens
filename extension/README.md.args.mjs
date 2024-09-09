export const extraContents = `
## Lens Setup

Scaffold-Lens uses an environment variable to specify the burner wallet. This allows for whitelisting the address in the Lens Protocol contracts. **It doesn't need to be changed unless you specifically want to use a different burner wallet address.**

In the hardhat project, create a new file called \`.env.local\` in the root directory and add the following:
\`\`\`
BURNER_PUBLIC_KEY=
\`\`\`

In the Next.js project, create a new file called \`.env.local\` in the root directory and add the following:
\`\`\`
NEXT_PUBLIC_BURNER_PRIVATE_KEY=
\`\`\`

The public key used in the hardhat project should match the private key used in the Next.js project. **These keys should NOT be used in production.**

## Debugging Lens Modules

To debug your Lens Modules, you can use the Lens Protocol UI to create and act on publications. The UI is available at \`http://localhost:3000/lens\`, or you can click on the "Open Actions" navigation link in the header.

The Scaffold-Lens Extension includes example contracts for Open Actions and Collect Modules in the \`packages/hardhat/contracts\` directory. You can use these contracts as a starting point for your own Lens Modules. The Open Actions page will automatically include any deployed Open Actions and Collect Modules in the dropdowns.

The \`TipActionModule\` corresponds to the [example from the Lens Docs](https://www.lens.xyz/docs/primitives/publications/open-actions#creating-open-actions-example). The \`PayWhatYouWantCollectModule\` is an example of an Open Action Collect Module that can be used with the core \`CollectPublicationAction\` Open Action.

The \`/lens\` page will also automatically display any ERC-20 tokens that were deployed locally in the sidebar to make it easier to use these tokens to initialize and act on publications that require token transfers.

1. **Create a Profile**  
   Before you can create publications, you need to create a profile. Click on the "Add Profile" button in the sidebar and follow the instructions to create a profile.
2. **Create a Publication**  
   Use the textarea in the main content section to create a new publication. You can select an Open Action and Collect Module to use. For example, you can create a new publication with tipping enabled using the \`TipActionModule\` contract.
3. **Act on a Publication**  
   You can act on publications by clicking on the "Act" button in the publication card.

## Demo

You can find a full walkthrough of the extension setup and usage on YouTube: https://youtu.be/ZdL5cGaXlas
`