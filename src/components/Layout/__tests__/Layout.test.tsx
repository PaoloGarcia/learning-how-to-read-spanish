import React from "react"
import { render } from "@testing-library/react"
import Layout from "../"

describe("Snapshot testing", () => {
    test("rendering the component with no args, only children content", () => {
        const { asFragment } = render(<Layout>Hello</Layout>)
        const firstRender: DocumentFragment = asFragment()
        expect(firstRender).toMatchSnapshot()
    })

    test("rendering component with arguments", () => {
        const { asFragment } = render(<Layout backButton title="Paolo">Hello</Layout>)
        const firstRender: DocumentFragment = asFragment()
        expect(firstRender).toMatchSnapshot()
    })
})
