import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import TodosCard from "./TodosCard"

import { user, userTodos } from "../../assets/js/helpers/testHelper"

describe("<TodosCard />", () => {
  test("user name and role are displayed", () => {
    const component = render(<TodosCard user={user} userTodos={[]} admin={true} />)
    expect(component.container).toHaveTextContent(user.name)
    expect(component.container).toHaveTextContent(user.role)
  })

  test("renders empty content if admin", () => {
    const component = render(<TodosCard user={user} userTodos={[]} admin={true} />)
    expect(component.container).toHaveTextContent("Cet utilisateur n'a pas de tâches")
  })

  test("renders empty placeholder if user", () => {
    const component = render(<TodosCard user={user} userTodos={[]} admin={false} />)
    expect(component.container).toHaveTextContent("Vous n'avez pas de tâche assignée")
  })

  test("renders empty placeholder  content", () => {
    const component = render(<TodosCard user={user} userTodos={userTodos} admin={true} />)
    expect(component.container).toHaveTextContent(userTodos[0].text)
    expect(component.container).toHaveTextContent(userTodos[1].text)
  })
})
