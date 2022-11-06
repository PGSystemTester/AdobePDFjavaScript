//Run this from consol log (select and hit ctl ENTER)

/*
Use this to remove text from bookmarks
*/
  function renameBookMark(bkm, nLevel){
    const textToRemove = "Monthly Statements_"; //change this
    var s = "";
    if(nLevel > 0){
      bkm.name = bkm.name.replace(textToRemove,"");
    }
    for (var i = 0; i < nLevel; i++) s += " ";
        console.println(s + "+-" + bkm.name);
      if (bkm.children != null)
      for (var i = 0; i < bkm.children.length; i++)
        renameBookMark(bkm.children[i], nLevel + 1);
  }
  console.clear(); console.show();
  console.println("Renaming all bookmarks in the document.");
  renameBookMark(this.bookmarkRoot, 0);

/*
Keeps only the first 7 characters
2021-03-31 will be 2021-03
*/
  function trimName(bkm, nLevel){
      var s = "";
      // only the first 7 characters
      if(nLevel > 1 && bkm.name.length == 10 ){
          bkm.name = bkm.name.slice(0,7);
          }

      for (var i = 0; i < nLevel; i++) s += " ";
        console.println(s + "+-" + bkm.name);
          if (bkm.children != null)
            for (var i = 0; i < bkm.children.length; i++)
                trimName(bkm.children[i], nLevel + 1);
  }
  //console.clear(); console.show();
  console.println("New Names");
  trimName(this.bookmarkRoot, 0);
