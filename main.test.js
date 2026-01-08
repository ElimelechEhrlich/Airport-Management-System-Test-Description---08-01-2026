import { test } from "node:test"
import { assert } from "node:assert"
import { buyingTicket } from "./services/ticketsService.js"

test.describe("", () => {
    test("buyingTicket", () => {

        assert.strictEqual(buyingTicket())
    })
})