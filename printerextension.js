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
	ext.version = "v1.2";
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status: 2, msg: '((READY)) Printer Extension ' + ext.version + ' [MRCOMPUTER1]'};
	};
	
	ext.printText = function(text){
		var printWindow = window.open("", "Printer Extension " + ext.version);
		printWindow.document.title = "Printer Extension " + ext.version;
		printWindow.document.write("<head><title>Printer Extension " + ext.version + "</title></head>");
		printWindow.document.write(text + "<br><hr color='black'><small>A remix of Mrcomputer1 " + ext.version + " by redstonermoves!</small>" + "</body>");
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
	
	ext.testPrint = function(type){
		if(type == "Google Cloud Print"){
			var gcpGadget = new cloudprint.Gadget();
			var content = "<b>Method</b>: Google Cloud Print<br>" +
			"<b>Version</b>: Printer Extension " + ext.version + "<br>" +
			"<br><b>Browser Information: </b><br>" +
			"<b>Browser Name</b>: " + navigator.appName + "<br>" +
			"<b>Browser Code Name</b>: " + navigator.appCodeName + "<br>" +
			"<b>Browser Engine</b>: " + navigator.product + "<br>" +
			"<b>Browser Version</b>: " + navigator.appVersion + "<br>" +
			"<b>Browser Minor Version</b>: " + navigator.appMinorVersion + "<br>" +
			"<b>Browser User Agent</b>: " + navigator.userAgent + "<br>" +
			"<b>Browser Platform</b>: " + navigator.platform + "<br>" +
			"<b>Browser Language</b>: " + navigator.language + "<br>" +
			"<br><br><center><h1>It worked!</h1></center>";
			gcpGadget.setPrintDocument("text/html", "Printer Extension " + ext.version + " Test Page", content);
			gcpGadget.openPrintDialog();
		}else{
			var printWindow = window.open("", "Printer Extension" + ext.version + " Test Page");
			var content = "<head><title>Printer Extension " + ext.version + " Test Page</title></head><body>" + 
			"<b>Method</b>: Normal Print<br>" +
			"<b>Version</b>: Printer Extension " + ext.version + "<br>" +
			"<br><b>Browser Information</b><br>" +
			"<b>Browser Name</b>: " + navigator.appName + "<br>" +
			"<b>Browser Code Name</b>: " + navigator.appCodeName + "<br>" +
			"<b>Browser Engine</b>: " + navigator.product + "<br>" +
			"<b>Browser Version</b>: " + navigator.appVersion + "<br>" +
			"<b>Browser Minor Version</b>: " + navigator.appMinorVersion + "<br>" +
			"<b>Browser User Agent</b>: " + navigator.userAgent + "<br>" +
			"<b>Browser Platform</b>: " + navigator.platform + "<br>" +
			"<b>Browser Language</b>: " + navigator.language + "<br>" +
			"<br><br><center><h1>It worked!</h1></center></body>";
			printWindow.document.write(content);
			printWindow.print();
		}
	};
	
	var blocksMenusURL = {
		blocks: [
			[' ', 'Print HTML %s', 'printText', ''],
			[' ', 'Print Image %s', 'printImage', ''],
			[' ', 'Google Cloud Print HTML %s', 'GCPtext', ''],
			[' ', 'Google Cloud Print Image %s', 'GCPimage', ''],
			[' ', 'Test Print %m.testPrintBlock', 'testPrint', 'Normal Print'],
		],
		menus: {
			testPrintBlock: ["Google Cloud Print", "Normal Print"],
		},
		url: 'http://mrcomputer1.github.io/PrinterExtension/'
	};
	ScratchExtensions.register('Printer Extension', blocksMenusURL, ext);
})({});
