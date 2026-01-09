import type { Meta, StoryObj } from "@storybook/react";
import {
  LibraryCard,
  LibraryCardHeader,
  LibraryCardTitle,
  LibraryCardDescription,
  LibraryCardContent,
  LibraryCardFooter,
} from "@/components/library/LibraryCard";
import { Button } from "@/components/ui/button";
import { LibraryBadge } from "@/components/library/LibraryBadge";

const meta: Meta<typeof LibraryCard> = {
  title: "Components/Card",
  component: LibraryCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated", "interactive", "outlined", "ghost"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "default", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LibraryCard className="w-80">
      <LibraryCardHeader>
        <LibraryCardTitle>Card Title</LibraryCardTitle>
        <LibraryCardDescription>
          A brief description of the card content.
        </LibraryCardDescription>
      </LibraryCardHeader>
      <LibraryCardContent>
        <p className="text-sm text-muted-foreground">
          This is the main content area of the card.
        </p>
      </LibraryCardContent>
    </LibraryCard>
  ),
};

export const Elevated: Story = {
  render: () => (
    <LibraryCard variant="elevated" className="w-80">
      <LibraryCardHeader>
        <LibraryCardTitle>Elevated Card</LibraryCardTitle>
        <LibraryCardDescription>
          This card has a subtle shadow for elevation.
        </LibraryCardDescription>
      </LibraryCardHeader>
      <LibraryCardContent>
        <p className="text-sm text-muted-foreground">
          Elevated cards stand out from the page background.
        </p>
      </LibraryCardContent>
    </LibraryCard>
  ),
};

export const Interactive: Story = {
  render: () => (
    <LibraryCard variant="interactive" className="w-80">
      <LibraryCardHeader>
        <LibraryCardTitle>Interactive Card</LibraryCardTitle>
        <LibraryCardDescription>
          Hover over this card to see the effect.
        </LibraryCardDescription>
      </LibraryCardHeader>
      <LibraryCardContent>
        <p className="text-sm text-muted-foreground">
          Interactive cards respond to user hover actions.
        </p>
      </LibraryCardContent>
    </LibraryCard>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <LibraryCard variant="elevated" className="w-80">
      <LibraryCardHeader>
        <LibraryCardTitle>Card with Actions</LibraryCardTitle>
        <LibraryCardDescription>
          This card includes footer actions.
        </LibraryCardDescription>
      </LibraryCardHeader>
      <LibraryCardContent>
        <p className="text-sm text-muted-foreground">
          Cards can include footer sections with buttons and actions.
        </p>
      </LibraryCardContent>
      <LibraryCardFooter className="gap-2">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Save</Button>
      </LibraryCardFooter>
    </LibraryCard>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <LibraryCard variant="elevated" padding="none" className="w-72 overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20" />
      <div className="p-6">
        <LibraryCardHeader className="p-0">
          <div className="flex items-start justify-between">
            <LibraryCardTitle>Pro Plan</LibraryCardTitle>
            <LibraryBadge variant="success" size="sm">
              Popular
            </LibraryBadge>
          </div>
          <LibraryCardDescription>
            Perfect for growing teams
          </LibraryCardDescription>
        </LibraryCardHeader>
        <LibraryCardContent className="p-0 pt-4">
          <div className="text-3xl font-bold">
            $29<span className="text-sm font-normal text-muted-foreground">/month</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>✓ Unlimited projects</li>
            <li>✓ Priority support</li>
            <li>✓ Advanced analytics</li>
          </ul>
        </LibraryCardContent>
        <LibraryCardFooter className="p-0 pt-6">
          <Button className="w-full" variant="gradient">
            Get Started
          </Button>
        </LibraryCardFooter>
      </div>
    </LibraryCard>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <LibraryCard variant="default" className="w-60">
        <LibraryCardHeader>
          <LibraryCardTitle>Default</LibraryCardTitle>
        </LibraryCardHeader>
        <LibraryCardContent>
          <p className="text-sm text-muted-foreground">Basic bordered card</p>
        </LibraryCardContent>
      </LibraryCard>
      <LibraryCard variant="elevated" className="w-60">
        <LibraryCardHeader>
          <LibraryCardTitle>Elevated</LibraryCardTitle>
        </LibraryCardHeader>
        <LibraryCardContent>
          <p className="text-sm text-muted-foreground">Card with shadow</p>
        </LibraryCardContent>
      </LibraryCard>
      <LibraryCard variant="interactive" className="w-60">
        <LibraryCardHeader>
          <LibraryCardTitle>Interactive</LibraryCardTitle>
        </LibraryCardHeader>
        <LibraryCardContent>
          <p className="text-sm text-muted-foreground">Hover to see effect</p>
        </LibraryCardContent>
      </LibraryCard>
    </div>
  ),
};
