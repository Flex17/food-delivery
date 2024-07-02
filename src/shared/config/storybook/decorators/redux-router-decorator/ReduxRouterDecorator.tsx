import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/redux/store.ts";

export const ReduxRouterDecorator = (Story: StoryFn) => (
    <Provider store={store}>
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    </Provider>
);
