import React from "react"
import { render } from "@testing-library/react"
import WordsPage from ".."

describe("Snapshot testing", () => {
    it("renders component without args", () => {
        const { asFragment } = render(<WordsPage />)
        const firstRender: DocumentFragment = asFragment()
        expect(firstRender).toMatchSnapshot()
    })
})
