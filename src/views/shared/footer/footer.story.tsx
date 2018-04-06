import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../../storybook/views"
import { Footer } from "./footer"

storiesOf("Footer")
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="default" usage="Used for normal footer.">
        <Footer />
      </UseCase>
    </Story>
  ))
