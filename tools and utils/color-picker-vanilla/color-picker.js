function ColorPicker(){
    this.colors = [
        //Black to White
        ["#000000", "#434343" , "#666666", "#999999" , "#B7B7B7" , "#CCCCCC", "#D9D9D9" , "#EFEFEF", "#F3F3F3", "#FFFFFF"],
        //Brown
        ["#795548", "#EFEBE9", "#D7CCC8","#BCAAA4", "#A1887F", "#8D6E63", "#6D4C41", "#5D4037", "#4E342E", "#3E2723"],
        //Red
        ["#F44336", "#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350","#E53935","#D32F2F", "#C62828", "#B71C1C"],
        //Orange
        ["#FF9800", "#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FB8C00","#F57C00", "#EF6C00", "#E65100"],
        //Yellow
        ["#FFEB3B", "#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FDD835","#FBC02D", "#F9A825", "#F57F17"],
        //Green
        ["#4CAF50", "#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#43A047", "#388E3C", "#2E7D32", "#1B5E20"],
        //Blue
        ["#2196F3", "#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1"], 
        //Indigo  
        ["#3F51B5", "#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB","#5C6BC0", "#3949AB","#303F9F", "#283593", "#1A237E"],
        //Cyan
        ["#00BCD4", "#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00ACC1","#0097A7", "#00838F", "#006064"],
        //Purple
        ["#9C27B0", "#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#8E24AA","#7B1FA2", "#6A1B9A", "#4A148C"],
        //Pink
        ["#E91E63", "#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#D81B60","#C2185B", "#AD1457", "#880E4F"]
    ];
}
//Properties
ColorPicker.prototype.currentColor = null;

//Methods
ColorPicker.prototype.CreateColorsGroup = function CreateColorsGroup(parent){

    var self = this;

    var i = 1;
    this.colors.forEach(function(element) {
        //Creating color group
        var colorGroup = document.createElement("div");
        
        var boxSize = parent.offsetWidth * 10 / 100;

        if(i == 1){
            colorGroup.style.height = boxSize + "px";
            colorGroup.style.marginBottom = "10px";
            colorGroup.style.width = "100%";
            
        }else{
            colorGroup.style.display = "inline-block"
            colorGroup.style.width = "10%";
        }
        
        //Creating color box
        element.forEach(function(color){
            var colorBox = document.createElement("div");
            colorBox.style.height = boxSize + "px";
            colorBox.style.backgroundColor = color;
            colorBox.style.cursor = "pointer";

            //ontouchstart
            colorBox.onmousedown = function(){
                self.currentColor = colorBox.style.backgroundColor;

                var previousBoxSelected = document.getElementsByClassName("selected-color")[0];
                if(previousBoxSelected)
                    previousBoxSelected.classList.remove("selected-color");

                this.classList.add("selected-color");
            };

            colorBox.setAttribute("data-color", color);

            if(i == 1){
                colorBox.style.display =  "inline-block"; 
                colorBox.style.width = boxSize + "px";
            }else{
                colorBox.style.width = "100%";
    
            }
            colorGroup.appendChild(colorBox);
        });

        if(i != 1)
            colorGroup.firstChild.style.marginBottom = "10px";

        parent.appendChild(colorGroup);

        i == 1 ? i++ : i = 0;
    }, this);
};

ColorPicker.prototype.CreateClasses  = function(){
    var style = document.createElement('style');
    style.type = 'text/css';

    //Selected Color
    style.innerHTML = ".selected-color { border: 3px solid #37474F;}";


    document.getElementsByTagName('head')[0].appendChild(style);
}

ColorPicker.prototype.ApplyColorPicker = function ApplyColorPicker(element){
    this.CreateClasses();
    this.CreateColorsGroup(element);
}

//Main
function Main(){
    var colorPickerContainer = document.getElementById("color-picker-container");
    var colorPicker = new ColorPicker();

    colorPicker.ApplyColorPicker(colorPickerContainer);
}

window.addEventListener("load", Main);

