function high_low(arr) {
	var max = null;
	var min = null;

	for (var i = 0; i < arr.length; i++) {
		var elem = arr[i];

		if (min === null || min > elem) {
			min = elem;
		};
		if (max === null || max < elem) {
			max = elem;
		};
	};
	return "min = " + min + " , max = " + max;
}