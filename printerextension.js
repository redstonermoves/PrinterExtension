(function(ext){
	
	$.ajax({

        async:false,

        type:'GET',

        url:'https://www.google.com/cloudprint/client/cpgadget.js',
		
        data:null,
        
        success: function(){},
		
		error: function(){},

        dataType:'script'

    });
	ext.version = "v1.0";
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status: 2, msg: '((READY)) Printer Extension ' + ext.version + ' [MRCOMPUTER1]'};
	};
	
	ext.printText = function(text){
		var printWindow = window.open("", "Printer Extension " + ext.version);
		printWindow.document.title = "Printer Extension " + ext.version;
		printWindow.document.write("<head><title>Printer Extension " + ext.version + "</title></head>");
		printWindow.document.write(text + "<br><hr color='black'><small>Printed using Printer Extension " + ext.version + " by Mrcomputer1</small>" + "</body>");
		printWindow.print();
	};
	
	ext.printImage = function(imageURL){
		var printWindow = window.open("", "Printer Extension " + ext.version);
		printWindow.document.title = "Printer Extension " + ext.version;
		printWindow.document.write("<head><title>Printer Extension " + ext.version + "</title></head>");
		var text = "<img src='" + imageURL + "'>";
		printWindow.document.write(text + "<br><hr color='black'><small>Printed using Printer Extension " + ext.version + " by Mrcomputer1</small>" + "</body>");
		printWindow.print();
	};
	
	ext.GCPtext = function(text){
		var gcpGadget = new cloudprint.Gadget();
		gcpGadget.setPrintDocument("text/html", "Printer Extension " + ext.version, text + "<br><hr color='black'><small>Printed using Printer Extension " + ext.version + " by Mrcomputer1</small>");
		gcpGadget.openPrintDialog();
	};
	
	ext.GCPimage = function(imageURL){
		var gcpGadget = new cloudprint.Gadget();
		gcpGadget.setPrintDocument("text/html", "Printer Extension " + ext.version, "<img src='" + imageURL + "'>" + "<br><hr color='black'>" + "<small>Printed using Printer Extension " + ext.version + " by Mrcomputer1</small>");
		gcpGadget.openPrintDialog();
	};
	
	var blocksMenusURL = {
		blocks: [
			[' ', 'Print HTML %s', 'printText', ''],
			[' ', 'Print Image %s', 'printImage', ''],
			[' ', 'Google Cloud Print HTML %s', 'GCPtext', ''],
			[' ', 'Google Cloud Print Image %s', 'GCPimage', ''],
		],
		url: 'http://mrcomputer1.github.io/PrinterExtension/'
	};
	ScratchExtensions.register('Printer Extension', blocksMenusURL, ext);
})({});
