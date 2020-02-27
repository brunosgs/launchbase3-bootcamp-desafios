const name = "Silvana"
const gender = "f"
const age = 65
const contribution = 30

const totalContribution = age + contribution

const manCanRetire = ((gender == "F" || gender == "f") && contribution >= 30 && totalContribution >= 85)
const womanCanRetire = ((gender == "M" || gender == "m") && contribution >= 35 && totalContribution >= 95)

if (manCanRetire || womanCanRetire) {
    console.log(`${name}, você pode se aposentar!`)
} else {
    console.log(`${name}, você ainda não pode se aposentar!`)
}