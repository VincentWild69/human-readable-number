module.exports = function toReadable (number) {

  let masNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	let masHum1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
	let masHum2 = ['00', '01', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	let mas = number.toString().split('');
	mas = mas.map(Number);

	let result = '';

	if (mas.length == 1) {
		for (let i = 0; i < masNumbers.length - 10; i++) {
			if (mas[0] == masNumbers[i]) {
				result += masHum1[i];
				return result;
			}
		}
	}

	if (mas.length == 2) {

		for (let i = 10; i < masNumbers.length; i++) {
			if (mas[0].toString() + mas[1].toString() == masNumbers[i].toString()) {
				result += masHum1[i];
				return result;
			};
		}
		
		for (let i = 0; i < masNumbers.length - 10; i++) {
			if (mas[0] == masNumbers[i]) {
				result += masHum2[i];
					if (mas[1] == 0) {
						return result;
					}
				}		
		}

		for (let i = 0; i < masNumbers.length - 10; i++) {
			if (mas[1] == masNumbers[i]) {
				result += ` ${masHum1[i]}`;
				return result;
			}
		}
		
	}
	
	if (mas.length == 3) {

		for (let i = 0; i < masNumbers.length - 10; i++) {
			if (mas[0] == masNumbers[i]) {
				result += `${masHum1[i]} hundred`;
				if (mas[1] == 0 & mas[2] == 0) {
					return result;
				}
			}
		}

		if (mas[1] == 0) {
			for (let i = 0; i < masNumbers.length - 10; i++) {
				if (mas[2] == masNumbers[i]) {
					result += ` ${masHum1[i]}`;
					return result;
				}
			}
		}

		for (let i = 10; i < masNumbers.length; i++) {
			if (mas[1].toString() + mas[2].toString() == masNumbers[i].toString()) {
				result += ` ${masHum1[i]}`;
				return result;
			};
		}

		for (let i = 0; i < masNumbers.length - 10; i++) {
			if (mas[1] == masNumbers[i]) {
				result += ` ${masHum2[i]}`;
					if (mas[2] == 0) {
						return result;
					}
				}		
		}

		for (let i = 0; i < masNumbers.length - 10; i++) {
			if (mas[2] == masNumbers[i]) {
				result += ` ${masHum1[i]}`;
				return result;
			}
		}

	}
}
