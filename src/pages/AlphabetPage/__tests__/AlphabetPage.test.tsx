import React from "react"
import { render } from "@testing-library/react"
import AlphabetPage from ".."

describe("Snapshot Testing", () => {
    test("rendering component with no args", () => {
        const { asFragment } = render(<AlphabetPage />)
        const firstRender: DocumentFragment = asFragment()
        expect(firstRender).toMatchSnapshot()
    })
})