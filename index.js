/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]){
  let employeeRecord = {}
  employeeRecord.firstName = firstName
  employeeRecord.familyName = familyName
  employeeRecord.title = title
  employeeRecord.payPerHour = payPerHour
  employeeRecord.timeInEvents = []
  employeeRecord.timeOutEvents = []
  return employeeRecord
}

function createEmployeeRecords (array){
  let employeeRecord = array.map(employee=>createEmployeeRecord(employee))
  return employeeRecord
}

function createTimeInEvent (dateStamp){
  let [date, hour] = dateStamp.split(' ')
  this.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour),
      date: date
  })
  return this
}

function createTimeOutEvent (dateStamp){
  let [date, hour] = dateStamp.split(' ')
  this.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(hour),
      date: date
  })
  return this
}

function hoursWorkedOnDate (date){
  let timeInOnDate = this.timeInEvents.filter(employee=>employee.date === date)
  let TimeOutOnDate = this.timeOutEvents.filter(employee=>employee.date === date)
  return (TimeOutOnDate[0].hour - timeInOnDate[0].hour) / 100
}

function wagesEarnedOnDate (date){
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName (scrArray, firstName){
      let matchedEmployee = scrArray.filter(employee => employee.firstName === firstName)
      if(matchedEmployee.length === 1){
        return matchedEmployee[0]
      }else if(matchedEmployee.length !== 0){
          return matchedEmployee
      }
      return undefined
}

function calculatePayroll (employeesRecords){
    let arrayOfWages = employeesRecords.map(employee=>allWagesFor.call(employee))
    return arrayOfWages.reduce((acc, curr) => acc+curr, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}