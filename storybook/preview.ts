import type { Preview } from "@storybook/react";
import { ReduxRouterDecorator, StyleDecorator } from "../src/shared/config/storybook";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator, ReduxRouterDecorator],
};

export default preview;
