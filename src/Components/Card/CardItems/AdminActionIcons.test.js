import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import TodoListItem from "./ToDoListItem"

import { user, userTodos } from "../../../assets/js/helpers/testHelper"
const todo = userTodos[0]
describe("<AdminActionIcons />", () => {
  const { getByTestId } = render(<TodoListItem user={user} todo={todo} admin={true} />)
  const urgentButton = getByTestId("urgent-button")
  const transferButton = getByTestId("transfer-button")
  const deleteButton = getByTestId("delete-button")

  test("Renders the three buttons", () => {
    expect(urgentButton).toBeDefined()
    expect(transferButton).toBeDefined()
    expect(deleteButton).toBeDefined()
  })

  test("Icons visible on mouseover", () => {
    const { getByTestId } = render(<TodoListItem user={user} todo={todo} admin={true} />)
    const element = getByTestId("icons-container")
    fireEvent.mouseOver(element)
    expect(element).toBeVisible()
  })
})
