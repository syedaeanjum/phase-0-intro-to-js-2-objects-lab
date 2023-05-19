const employee = {
    name: "Sam", 
    streetAddress: "11 Broadway"  
}
function updateEmployeeWithKeyAndValue(object, key, value){
    const copyOfObject = {...object}
    copyOfObject[key] = value;
    return copyOfObject
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    employee.streetAddress = "12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(object, key){
    const copyOfObjectB = {...object}
    delete copyOfObjectB[key]
    return copyOfObjectB
}
function destructivelyDeleteFromEmployeeByKey(employee, name, Sam){
    delete employee.name
    return employee
}