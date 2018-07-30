
let selections = [false, false, false];
const active = [true, true, false]; // false потому что неактивная кошечка
const blue = "#1698d9";
const pink = "#d91667";
const grey = "#787878";


function selected(selectedIndex) {

	const borders = document.getElementsByClassName('itemBorder');
	const cyrclies = document.getElementsByClassName('number');
	const bordersAngle = document.getElementsByClassName('angle');
	const endedBg = document.getElementsByClassName('endedBgGray');
	const endedBorder = document.getElementsByClassName('endedBorderGrey');

	let i;
	for (i = 0; i < borders.length; i++) {

		if (selectedIndex === i) {
			
			if (active[i]) {
				
				if (selections[i]) {
					selections[i] = false;
					borders[i].style.border = "4px solid " + blue;
					cyrclies[i].style.background = blue;
					bordersAngle[i].style.border = "4px solid " + blue;
					endedBg[i].style.background = grey;
					endedBorder[i].style.border = "4px solid " + grey;

				} else {
					selections[i] = true;
					borders[i].style.border = "4px solid " + pink;
					cyrclies[i].style.background = pink;
					bordersAngle[i].style.border = "4px solid " + pink;
					endedBg[i].style.background = grey;
					endedBorder[i].style.border = "4px solid " + grey;

				}
			} else {
				borders[i].style.border = "4px solid " + grey;
				cyrclies[i].style.background = grey;
				bordersAngle[i].style.border = "4px solid " + grey;
				endedBg[i].style.background = grey;
				endedBorder[i].style.border = "4px solid " + grey;
			}
		}
	}	
}