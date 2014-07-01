$(document).on('ready', function() {

//Problem #1

var getName = function(inObject) {
	var nameTemp = inObject.name;
	return nameTemp;
};

//Problem #2

var totalLetters = function(inArray) {
	totalLength = 0;
	for (var i=0; i < inArray.length; i++) {
		var stringTemp = inArray[i];
		var stringLength = stringTemp.length;
		totalLength = stringLength + totalLength;
	}
	return totalLength;
};

//Problem #3

var keyValue = function(keyIn, valueIn) {
	var tempObject = {};
	tempObject[keyIn] = valueIn;
	return tempObject;
};

//Problem #4

var negativeIndex = function(inArray, negativeNumber) {
	return inArray[ inArray.length + negativeNumber ];
};

//Problem #5

var removeM = function(inString) {
	var charArray = inString.split("");
	var noMArray = charArray.filter(isM);
	return noMArray.join("");
};

var isM = function(inStringSmall) {
	return inStringSmall !== 'm';
};

//Problem #6

var printObject = function(inObject) {
	for (var key in inObject) {
		console.log(key + ' is ' + inObject[key]);
	}
};

//Problem #7

var vowels = function(inString) {
	var charArray = inString.split('');
	var vowelArrayUse = charArray.filter(isVowels);
	return vowelArrayUse;
};

var isVowels = function(inStringSmall) {
	var vowelArray = ['a','e','i','o','u','A','E','I','O','U'];
	return vowelArray.indexOf(inStringSmall) > -1;
};

//Problem #8

var twins = function(inArray) {
	if (inArray.length % 2 !== 0) {
		return false;
	}
	else {
		for (var i=0; i < inArray.length; i++) {
			if ( (i % 2 === 0) && (inArray[i] !== inArray[i + 1]) ) {
				return false;
			}
		}
	}
	return true;
};

//Problem #9

var or = function(inArray) {
	return inArray.indexOf(true) > -1;
};

//Problem #10

var unique = function(inArray) {
	var uniqueArray = [];
	for (var i=0; i < inArray.length; i++) {
		if (uniqueArray.indexOf(inArray[ i ]) === -1) {
			uniqueArray.push(inArray[ i ]);
		}
	}
	return uniqueArray;
};




window.getName = getName;
window.tLength = totalLetters;
window.keyValue = keyValue;
window.nI = negativeIndex;
window.unique = unique;

console.log(getName({ name: 'Luisa', age: 25 } ) );
console.log(totalLetters( ['javascript', 'is', 'awesome'] ) );
console.log(totalLetters( ['what', 'happened', 'to', 'my', 'function'] ) );
console.log(keyValue('city', 'Denver'));
console.log(negativeIndex( ['a', 'b', 'c', 'd', 'e'], -2 ));
console.log(negativeIndex( ['jerry', 'sarah', 'sally'], -1 ));
console.log(removeM( 'family' ) );
console.log(removeM( 'memory' ) );
printObject( { a: 10, b: 20, c: 30 } );
printObject({ firstName: 'pork', lastName: 'chops' });
console.log(vowels('Alabama'));
console.log(vowels('What lets in youth?'));
console.log( twins(['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd'])  );
console.log( twins(['a', 'a', 'b', 'z']) );
console.log( twins(['a', 'a', 'b']) );
console.log( twins(['a', 'a', 'b', undefined]) );
console.log( or([false, false, true, false]) );
console.log( or([false, false, false]) );
console.log( or([]) );
console.log( unique(['a', 'b', 'a', 'c', 'd', 'd']) );
console.log( unique(['todd', 'avery', 'maria', 'avery']) );









});