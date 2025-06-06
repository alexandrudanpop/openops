/* eslint-disable react-hooks/rules-of-hooks */
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {
  AI_CHAT_CONTAINER_SIZES,
  AiChatContainer,
  AiChatContainerSizeState,
} from '../../components';
import { AIChatMessages } from '../../components/ai-chat-messages/ai-chat-messages';
import { Button } from '../../ui/button';
import { Toaster } from '../../ui/toaster';
import { sampleAIChatMessages } from './sample-messages';

const meta = {
  title: 'Components/AiChatContainer',
  component: AiChatContainer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    containerSize: {
      control: {
        type: 'select',
        options: [
          AI_CHAT_CONTAINER_SIZES.COLLAPSED,
          AI_CHAT_CONTAINER_SIZES.DOCKED,
          AI_CHAT_CONTAINER_SIZES.EXPANDED,
        ],
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-[800px]">
        <Story />
        <Toaster />
      </div>
    ),
  ],
  render: (args) => {
    const [
      { containerSize, showAiChat, setShowAiChat, toggleContainerSizeState },
      updateArgs,
    ] = useArgs();

    const onToggleContainerSizeState = (size: AiChatContainerSizeState) => {
      toggleContainerSizeState(size);
      updateArgs({ containerSize: size });
    };

    const onSetShowAiChat = (showAiChat: boolean) => {
      setShowAiChat(showAiChat);
      updateArgs({ showAiChat: showAiChat });
    };

    return (
      <>
        {!showAiChat && (
          <Button onClick={() => onSetShowAiChat(true)}>Show AI Chat</Button>
        )}
        <AiChatContainer
          {...args}
          containerSize={containerSize}
          toggleContainerSizeState={onToggleContainerSizeState}
          showAiChat={showAiChat}
          className="static"
        ></AiChatContainer>
      </>
    );
  },
} satisfies Meta<typeof AiChatContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docked: Story = {
  args: {
    parentHeight: 800,
    parentWidth: 800,
    containerSize: AI_CHAT_CONTAINER_SIZES.DOCKED,
    showAiChat: true,
    toggleContainerSizeState: fn(),
    handleSubmit: fn(),
    onCloseClick: fn(),
  },
};

export const Expanded: Story = {
  args: {
    ...Docked.args,
    containerSize: AI_CHAT_CONTAINER_SIZES.EXPANDED,
  },
};

export const Collapsed: Story = {
  args: {
    ...Docked.args,
    containerSize: AI_CHAT_CONTAINER_SIZES.COLLAPSED,
  },
};

export const Populated: Story = {
  args: {
    ...Docked.args,
  },
  render: (args) => {
    const [
      { containerSize, showAiChat, setShowAiChat, toggleContainerSizeState },
      updateArgs,
    ] = useArgs();

    const onToggleContainerSizeState = (size: AiChatContainerSizeState) => {
      toggleContainerSizeState(size);
      updateArgs({ containerSize: size });
    };

    const onSetShowAiChat = (showAiChat: boolean) => {
      setShowAiChat(showAiChat);
      updateArgs({ showAiChat: showAiChat });
    };

    return (
      <>
        {!showAiChat && (
          <Button onClick={() => onSetShowAiChat(true)}>Show AI Chat</Button>
        )}
        <AiChatContainer
          {...args}
          containerSize={containerSize}
          toggleContainerSizeState={onToggleContainerSizeState}
          showAiChat={showAiChat}
          className="static"
        >
          <AIChatMessages
            messages={sampleAIChatMessages}
            onInject={action('Inject command')}
          />
        </AiChatContainer>
      </>
    );
  },
};
