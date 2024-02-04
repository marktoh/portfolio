import type { Meta, StoryObj } from "@storybook/react";

import ProjectSection from "./";
import store from "../../../store";

const meta = {
  title: "Section/ProjectSection",
  component: ProjectSection,
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const { projects } = store;
export const Primary: Story = {
  args: {
    projects,
  },
};
