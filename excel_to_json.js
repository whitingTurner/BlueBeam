/**
 * Created by Jeevjyot on 7/22/16.
 */

//@Author: Jeevjyot Singh Chhabda


//////////////////////////////////////////////////
//This scripts the read Excel file
//Parse the excel file
//Export the data to JSON
//And eventually write out to the file
//Libraries: yet to decide, ExcelPLus etc etc
//////////////////////////////////////////////////


//this function works for only single worksheet present in the excel sheet


document.getElementById('fileinput').addEventListener('change', function(e){
    var files = e.target.files;
    var f=files[0];
    var file=files[0];
    // This code is only for demo ...
    var i,f;
    for (i = 0, f = files[i]; i != files.length; ++i) {
        console.log("name : " + f.name);
        console.log("size : " + f.size);
        console.log("type : " + f.type);
        console.log("date : " + f.lastModified)
        var reader = new FileReader();
        var name = f.name;
        reader.onload = function(e) {
            var data = e.target.result;

            var workbook = XLSX.read(data, {type: 'binary'});
            console.log(workbook.SheetNames[0]);

            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
            var json_object = JSON.stringify(XL_row_object);
            console.log("Lenght of the JSON OBJECT="+XL_row_object.length);
            //console.log(json_object);
            // console.log(JSON.parse(XLSX.utils.sheet_to_json(workbook.Sheets['book_1'])));
            console.log(XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]));
            /* DO SOMETHING WITH workbook HERE */
            //wrire the objects
            for(var i=0;i<XL_row_object.length;i++)
            {
                var issue="Issue #";
                console.log("Issue No = " +XL_row_object[i]["Issue #"]+" Room Number = "+XL_row_object[i]["Room"]+" Status ="+XL_row_object[i]["Status"]);
                //console.log("Room Number = "+XL_row_object[i]["Room"]);
                // console.log("Status ="+XL_row_object[i]["Status"]);
                //comparing each layer
                //assign open=on;
                //assing off=closed

            }

        };
        reader.readAsBinaryString(f);
    }
    ;


}, false);
//Create the object of issues, Room and Status which is use bluebeam Sofwtare
//writing this to the file
//using this file in different file to import this in the BLUEBEAM software

function write_to_file(Sheet_object){

    var layers = [
        {issues: "",
        room:"",
        status: ""}
    ];

    for(var i=0;i<Sheet_object;i++)
    {
        layers[i]["issues"] = Sheet_object[i]["Issues #"];
        layers[i]["room"] = Sheet_object[i]["Room"];
        layers[i]["status"] = Sheet_object[i]["Status"];
    }


};