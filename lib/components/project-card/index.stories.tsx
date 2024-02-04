import type { Meta, StoryObj } from "@storybook/react";

import ProjectCard from "./";
import store from "../../../store";

const meta = {
  title: "Component/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProject = store?.projects?.[0];
export const Primary: Story = {
  args: { ...sampleProject },
};
