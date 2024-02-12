import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./index";
import { Checkbox } from "@wds-ui/checkbox";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Marbella/Label",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  </div>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
