const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

const item0 = {
    type: "credit",
    value: 50.5
}

const item1 = {
    type: "credit",
    value: 702.69
}

const item2 = {
    type: "debit",
    value: 15.87
}

const item3 = {
    type: "credit",
    value: 500.69
}

function createTransaction(transaction) {
    checkTypeTransaction(transaction)

    user.transactions.push(transaction)
}

function checkTypeTransaction(transaction) {
    if (transaction.type == "credit") {
        user.balance += transaction.value
    }

    if (transaction.type == "debit") {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
    let objectResult = {}

    if (type == "credit") {
        let checkCredit = 0

        for (let t of user.transactions) {
            if (t.type == type) {
                if (t.value > checkCredit) {
                    objectResult = t
                    checkCredit = t.value
                }
            }
        }
        return objectResult
    }

    if (type == "debit") {
        let checkDebit = 0

        for (let t of user.transactions) {
            if (t.type == type) {
                if (t.value > checkDebit) {
                    objectResult = t
                    checkDebit = t.value
                }
            }
        }
        return objectResult
    }
}

function getAverageTransactionValue() {
    let sum = 0

    for (let ut of user.transactions) {
        sum += ut.value
    }

    return (sum / user.transactions.length)
}

function getTransactionsCount() {
    let objectResultSum = {
        credit: 0,
        debit: 0
    }

    for (let ut of user.transactions) {
        if (ut.type == "credit") {
            objectResultSum.credit += 1
        }

        if (ut.type == "debit") {
            objectResultSum.debit += 1
        }
    }

    return objectResultSum
}

function main() {
    createTransaction(item0)
    createTransaction(item1)
    createTransaction(item2)
    createTransaction(item3)

    console.log("Higher transaction CREDIT:")
    console.table(getHigherTransactionByType("credit"))

    console.log("Higher transaction DEBIT:")
    console.table(getHigherTransactionByType("debit"))
    console.log("Average transaction: " + getAverageTransactionValue())
    console.log(getTransactionsCount())
}

main()