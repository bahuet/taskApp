import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import TodoListItem from "./ToDoListItem"

import { user, userTodos } from "../../../assets/js/helpers/testHelper"
const todo = userTodos[0]
describe("<ToDoListItem />", () => {
  test("renders user task values", () => {
    const component = render(<TodoListItem user={user} todo={todo} admin={true} />)
    expect(component.container).toHaveTextContent(todo.text)
  })

  test("renders admin options", () => {
    const component = render(<TodoListItem user={user} todo={todo} admin={true} />)
    expect(component.container).toHaveTextContent(todo.text)
  })

  test("Icons not visible by default", () => {
    const { getByTestId } = render(<TodoListItem user={user} todo={todo} admin={true} />)
    const element = getByTestId("icons-container")
    expect(element).not.toBeVisible()
  })

  test("Icons visible on mouseover", () => {
    const { getByTestId } = render(<TodoListItem user={user} todo={todo} admin={true} />)
    const element = getByTestId("icons-container")
    fireEvent.mouseOver(element)
    expect(element).toBeVisible()
  })
})
