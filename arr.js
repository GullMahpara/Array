var names = ["GULL", "HIRA", "AYMEN", "FATIMA"];
console.log("-----SIMPLE ARRAY ELEMENTS-------");
for (var i = 0; i < names.length; i++) {
    console.log("name:" + (i + 1) + "\t" + names[i]);
}
console.log("------SPLICE array-------");
names.splice(1, 1, "yasmeen", "farheen", "noreen");
console.log(names);
console.log("-------slice array----------");
console.log(names.slice(1, 3));
console.log("---------shift---------");
names.shift();
console.log(names);
console.log("---------unshift---------");
names.unshift("Mahpara");
console.log(names);
console.log("--------push---------");
names.push("AFHSAN");
console.log(names);
console.log("-------pop---------");
names.pop();
console.log(names);
