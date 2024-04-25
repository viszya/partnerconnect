import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { labels, priorities, statuses } from "./data"

export function generateData() {
  const tasks = Array.from({ length: 100 }, () => ({
    id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    name: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
    avatar: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    industry: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    size: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    product: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    status: faker.helpers.arrayElement(statuses).value,
    label: faker.helpers.arrayElement(labels).value,
    priority: faker.helpers.arrayElement(priorities).value,
  }))

  fs.writeFileSync(
    path.join(__dirname, "tasks.json"),
    JSON.stringify(tasks, null, 2)
  )

  console.log("✅ Tasks data generated.")
}
