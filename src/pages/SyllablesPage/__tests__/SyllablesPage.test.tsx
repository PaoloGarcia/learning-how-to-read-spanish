import React from "react"
import { render } from "@testing-library/react"
import SyllablesPage from ".."

describe("Snapshot testing", () => {
    it("renders component with no args", () => {
        const { asFragment } = render(<SyllablesPage />)
        const firstRender: DocumentFragment = asFragment()
        expect(firstRender).toMatchSnapshot()
    })
})
