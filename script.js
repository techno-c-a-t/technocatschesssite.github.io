let tableBorder = 2;
var cellSize = Math.floor(document.documentElement.clientWidth/14.5);/*по расчетам в экран должно влазить не менее 14 клеток подряд
надо будет сделать второй режим, без прокрутки вообще*/

function initialization() {
    const elements = document.querySelectorAll('.cell'); //устанавливаем размер каждой клетки
    elements.forEach(element => {
        element.style.width = cellSize + 'px'; 
        element.style.height = cellSize + 'px'; 
    }); 
    let chessboard = document.getElementById('alll');
    chessboard.style.position = 'absolute';
    chessboard.style.top = 0.25 * cellSize;
    chessboard.style.left = 0.25 * cellSize;
    chessboard = document.getElementById('tableborder');    //настраеваем контейнер div, в который обёрнута таблица для получения красивой границы
    chessboard.style.borderWidth = tableBorder + 'px';
    chessboard.style.transform = 'translate(' + 3 * cellSize + 'px ,' + 3 * cellSize + 'px)';//двигаем таблицу на центр
    //alert("Started");
    chessboard.style.width = 8 * cellSize + 'px';
    chessboard.style.height = 8 * cellSize + 'px';
    let rd = (Math.floor(cellSize / 3)) + 'px';
    chessboard.style.borderRadius = rd;
    let bw= (Math.floor(cellSize / 20)) + 'px';
    if (bw == '0px')  {bw = '1px';};
    //alert(bw);
    chessboard.style.borderWidth = bw;
    let hourss = document.querySelectorAll('.clckrnd');
    hourss.forEach(hr =>{hr.style.borderRadius = rd;
                       hr.style.borderWidth = bw;});
    chessboard = document.getElementById('board');      //настраеваем теперь уже саму таблицу
    chessboard.style.borderRadius = (Math.floor(cellSize/6)) + 'px';
    //alert("success");
    
    
}

function positioning()
    {
    const coords = [        /*массив координат. первая строка это 12 или 0 часов и далее по стрелке. записаны координаты центра клетки в системе координат, где единичный отрезок это 1 клетка, а поле имеет размерность 14*14 клеток, координаты цетнра доски на поле 7,7 .левого верхнего угла 3,3*/
        7, 0.5,
        10, 1.5,
        12.5, 4,
        13.5, 7,
        12.5, 10,
        10, 12.5,
        7, 13.5,
        4, 12.5,
        1.5, 10,
        0.5, 7,
        1.5, 4,
        4, 1.5
    ];
    const hrs = document.querySelectorAll(".clckrnd");
    let i = 0;
    //alert("started");
    hrs.forEach(tmp => {
            tmp.style.position = 'absolute';
            tmp.style.left = cellSize *(coords[i]-0.5); /*условно если i = 2 то это 3 часа тоггда его координаты это coords[6] и coords[7], так как 0 часов это первый элемент массива */
            tmp.style.top = cellSize *(coords[i+1]-0.5);
            //let msg = cellSize *(coords[i]-0.5)+' and ' + cellSize *(coords[i+1]-0.5);
            //alert(msg);
            i++;
            i++;
        });
    }

/*function coloring() {
    let blackk = document.querySelectorAll('.blackk');
    blackk.forEach(cell => {
        cell.style.backgroundColor = 'rgb(255,176,46)';
    });
}*/

window.onload = function() {
    //coloring();
    initialization();
    //alert('init');
    positioning();
    //alert('posistioned');
    const elements = document.querySelectorAll('.cell');
    elements.forEach(element => {
        element.onclick = function() {
            element.classList.toggle('active');
        };
    });
};
















