function pocketmoney(money) {
  var divide = money
  console.log('made small money: $'+divide)
  var savings = divide*0.45
  var expenses = divide*0.5
  var experience = divide*0.05

  var general = savings*0.35
  var emergency = savings*0.15
  var goal = savings*0.4
  var treat = savings*0.1

  var phone = expenses*0.25
  var phonebalance = 0
  if (phone == 100 || phone > 100) {
    phonebalance = phone - 100
    phone = 100
  }

  var family = expenses*0.05
  var food = expenses*0.4
  var transport = expenses*0.2
  var others = expenses*0.1

  console.log(
    'savings: $'+savings,
    'expenses: $'+expenses,
    'experience/wealth: $'+experience)

    console.log(
    'general: $'+general,
    'emergency: $'+emergency,
    'goal: $'+goal,
    'treat: $'+treat)

     console.log(
    'phone: $'+phone,
    'balance from phone: $'+phonebalance,
    'family: $'+family,
    'food: $'+food,
    'transport: $'+transport,
    'others (like xero & btw): $'+others)
}

pocketmoney(233.16)
