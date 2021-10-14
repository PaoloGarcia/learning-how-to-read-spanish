import React from "react"
import { render } from "@testing-library/react"
import HomePage from ".."

describe("Snapshot testing", () => {
    test("rendering component with no args", () => {
        const { asFragment } = render(<HomePage />)
        const firstRender: DocumentFragment = asFragment()
        expect(firstRender).toMatchSnapshot()
    })
})
