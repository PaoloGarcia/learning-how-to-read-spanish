import React from "react"
import { render } from "@testing-library/react"
import Card from ".."

describe("Snapshot testing", () => {
    it("renders component without args", () => {
        const { asFragment } = render(<Card text="P" />)
        const firstRender: DocumentFragment = asFragment()
        expect(firstRender).toMatchSnapshot()
    })
})
