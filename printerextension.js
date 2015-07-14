(function(ext){
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status: 2, msg: '((READY)) Printer Extension v1.0 [MRCOMPUTER1]'};
	};
	
	ext.printText = function(text){
		var printWindow = window.open("", "Printer Extension v1.0");
		printWindow.document.title = "Printer Extension v1.0";
		printWindow.document.write("<head><title>Printer Extension v1.0</title></head>");
		printWindow.document.write("<small>Printed with ScratchX with extension Printer Extension v1.0 by Mrcomputer1</small><hr color='black'>" + text + "</body>");
		printWindow.print();
	};
	
	ext.printImage = function(imageURL){
		var printWindow = window.open("", "Printer Extension v1.0");
		printWindow.document.title = "Printer Extension v1.0";
		printWindow.document.write("<head><title>Printer Extension v1.0</title></head>");
		var text = "<img src='" + imageURL + "'>";
		printWindow.document.write("<small>Printed with ScratchX with extension Printer Extension v1.0 by Mrcomputer1</small><hr color='black'>" + text + "</body>");
		printWindow.print();
	}
	
	var blocksMenusURL = {
		blocks: [
			[' ', 'Print HTML %s', 'printText', ''],
			[' ', 'Print Image %s', 'printImage', ''],
		],
		url: 'http://mrcomputer1.github.io/PrinterExtension/'
	};
	ScratchExtensions.register('Printer Extension', blocksMenusURL, ext);
})({});
