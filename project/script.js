var page1src = 'page1.htm';
var page2src = 'page2.htm';
var page3src = 'page3.htm';
var page4src = 'page4.htm';
var page5src = 'page5.htm';
var page6src = 'page6.htm';

function write(id, value) {
    document.getElementById(id).innerHTML = value;
}

write('o1', 'Содержание');
write('o2', 'Равномерное движение');
write('o3', 'Неравномерное движение');
write('o4', 'Понятие скорости');
write('o5', 'Скорость');
write('o6', 'Средняя скорость');

function changes(obj) {
    obj = obj.options;
    obj = obj.selectedIndex; //индекс выбранного оптиона
    if (obj == 3) { document.getElementById("sel2").style.display = "block"; };
    if (obj == 4) { document.getElementById("txt2").style.display = "block"; };

};