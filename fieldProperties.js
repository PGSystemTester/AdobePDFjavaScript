//https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/JS_API_AcroJS.html#field

for (var fieldNumber = 0; fieldNumber < this.numFields ; fieldNumber++){
var d = this.getField(this.getNthFieldName(fieldNumber));
console.println('Name: ' + d.name 
     +'\n Type:' + d.type
     + '\n required:' + d.required
     + '\n value:' + d.value
     + '\n valueAsString:' + d.valueAsString 
     + '\n defaultValue :' + d.defaultValue 
     + '\n page:' + d.page
     + '\n calcOrderIndex :' + d.calcOrderIndex
     + '\n submitName:' + d.submitName
     + '\n userName :' + d.userName 
     + '\n Display :' + d.display
     + '\n charLimit:' + d.charLimit
     + '\n rect  :' + d.rect
/*
     
     + '\n buttonGetCaption() :' + d.buttonGetCaption()
     + '\n userName :' + d.userName 
     + '\n userName :' + d.userName 
     + '\n userName :' + d.userName 
*/
);
}
