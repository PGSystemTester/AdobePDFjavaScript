//https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/JS_API_AcroJS.html#field

for (var fieldNumber = 0; fieldNumber < this.numFields ; fieldNumber++){
var d = this.getField(this.getNthFieldName(fieldNumber));
console.println('Name: ' + d.name 
     +'\n Type:' + d.type
     + '\n Required:' + d.required
     + '\n value:' + d.value
     + '\n Page:' + d.page
     + '\n calcOrderIndex :' + d.calcOrderIndex
     + '\n submitName:' + d.submitName
     + '\n UserName :' + d.userName 
     + '\n Display :' + d.display 
     + '\n UserName :' + d.userName 
     + '\n UserName :' + d.userName
     + '\n UserName :' + d.userName
     + '\n UserName :' + d.userName
);
}
